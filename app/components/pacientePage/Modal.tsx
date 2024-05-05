// ModalPaciente.jsx

import { Dialog, DialogPanel, Button, Divider, TextInput, Select, SelectItem, DatePicker } from '@tremor/react';
import { es } from 'date-fns/locale';

import { useModalStore, useDataCarrerasTec, usePacienteStore } from '../../store/index'
import { useEffect, useState } from 'react';

export function ModalPaciente({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {

  // ! data para crear paciente
  const { createPaciente } = usePacienteStore();

  // ! data de carreras tec
  const { data, fetchData } = useDataCarrerasTec();

  useEffect(() => {
    fetchData(); // Realizar la solicitud Fetch al cargar el componente
  }, []); // Solo se ejecuta una vez


  // TODO: Implementar la logica para guardar los datos del paciente mediante le metodo POST

  // * SIRVE PARA SIMULAR EL ENVIO DE DATOS DEL PACIENTE
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isSaving) {
      // * Simula un retraso de 2 segundos para la solicitud POST.
      const timer = setTimeout(() => {
        setIsSaving(false);

      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSaving]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Perform the POST request here
    try {

      const pacienteData = {
        genero: selectedValue,
        estadoCivil: selectedValueCivil,
        schoolData: {
          plantel: selectedValuePlantel,
          carrera: {
            nombre: selectedValueCarrera,
            nomenclatura: data.find((carrera) => carrera.nombre === selectedValueCarrera)!.nomenclatura
          },
          noSemestre: selectedValueSemestre,
          correoTec: selectedValueCorreoInstitucional,
          noControl: selectedValueNoControl
        },
        telefono: selectedValueTelefono,
        direccion: selectedValueDireccion,
        cumple: selectedValueFechaNacimiento,
        nombre: selectedValueNombre,
        apellidoPaterno: selectedValueApellidoPaterno,
        apellidoMaterno: selectedValueApellidoMaterno,
        correoPer: selectedValueCorreo1
      };

      await createPaciente(pacienteData); // Aquí va el objeto con los datos del paciente
      setIsSaving(false);
      onClose();
    }
    catch (error) {
      console.error('Error:', error);
    }

    //onClose(); // Uncomment this line if you want to close the modal immediately after the POST request is sent
  };

  const { selectedPatient } = useModalStore();

  const [selectedValue, setSelectedValue] = useState(selectedPatient?.genero);
  const [selectedValueCivil, setSelectedValueCivil] = useState(selectedPatient?.estadoCivil);
  const [selectedValuePlantel, setSelectedValuePlantel] = useState(selectedPatient?.schoolData?.plantel);
  const [selectedValueCarrera, setSelectedValueCarrera] = useState(selectedPatient?.schoolData?.carrera?.nombre);
  const [selectedValueSemestre, setSelectedValueSemestre] = useState(selectedPatient?.schoolData?.noSemestre);
  const [selectedValueCorreoInstitucional, setSelectedValueCorreoInstitucional] = useState(selectedPatient?.schoolData?.correoTec);
  const [selectedValueTelefono, setSelectedValueTelefono] = useState(selectedPatient?.telefono);
  const [selectedValueDireccion, setSelectedValueDireccion] = useState(selectedPatient?.direccion);
  const [selectedValueFechaNacimiento, setSelectedValueFechaNacimiento] = useState(selectedPatient?.cumple);
  const [selectedValueNoControl, setSelectedValueNoControl] = useState(selectedPatient?.schoolData?.noControl);
  const [selectedValueNombre, setSelectedValueNombre] = useState(selectedPatient?.nombre);
  const [selectedValueApellidoPaterno, setSelectedValueApellidoPaterno] = useState(selectedPatient?.apellidoPaterno);
  const [selectedValueApellidoMaterno, setSelectedValueApellidoMaterno] = useState(selectedPatient?.apellidoMaterno);
  const [selectedValueCorreo1, setSelectedValueCorreo1] = useState(selectedPatient?.correoPer);


  // * SIRVE PARA ACTUALIZAR LOS DATOS DEL PACIENTE EN EL MODAL
  useEffect(() => {

    if(selectedPatient) {
      setSelectedValue(selectedPatient.genero);
      setSelectedValueCivil(selectedPatient.estadoCivil);
      setSelectedValuePlantel(selectedPatient.schoolData?.plantel);
      setSelectedValueCarrera(selectedPatient?.schoolData?.carrera?.nombre);
      setSelectedValueSemestre(selectedPatient.schoolData?.noSemestre);
      setSelectedValueCorreoInstitucional(selectedPatient.schoolData?.correoTec);
      setSelectedValueTelefono(selectedPatient.telefono);
      setSelectedValueDireccion(selectedPatient.direccion);
      setSelectedValueFechaNacimiento(selectedPatient.fechaNacimiento);
      setSelectedValueNoControl(selectedPatient.schoolData?.noControl);
      setSelectedValueNombre(selectedPatient.nombre);
      setSelectedValueApellidoPaterno(selectedPatient.apellidoPaterno);
      setSelectedValueApellidoMaterno(selectedPatient.apellidoMaterno);
      setSelectedValueCorreo1(selectedPatient.correoPer);
    }
  }, [selectedPatient]);

    return (
      <Dialog open={isOpen} onClose={onClose} static={true}>

        <DialogPanel>
          
          <div className="sm:mx-auto sm:max-w-2xl">
            
            <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Datos del paciente
            </h3>
           
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              completa los campos para registrar un nuevo paciente
            </p>
            
            <form onSubmit={handleSubmit} method="post" className="mt-10">
              
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Nombre
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="first-name"
                    placeholder="Nombre"
                    className="mt-2"
                    required
                    value={selectedValueNombre}
                    onValueChange={setSelectedValueNombre}
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Apellido Paterno
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="last-name"
                    name="last-name"
                    autoComplete="last-name"
                    placeholder="Apellido Paterno"
                    className="mt-2"
                    required
                    value={selectedValueApellidoPaterno}
                    onValueChange={setSelectedValueApellidoPaterno}
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Fecha de nacimiento
                    <span className="text-red-500">*</span>
                  </label>

                  <DatePicker  
                    id="last-name"
                    placeholder="Fecha de nacimiento"
                    enableYearNavigation = {true}
                    displayFormat = "dd / MMMM / yyyy"
                    value={selectedValueFechaNacimiento}
                    onValueChange={setSelectedValueFechaNacimiento}
                    enableClear = {true}
                    locale={es}
                    
                  />
    
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Apellido Materno
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="last-name"
                    name="last-name"
                    autoComplete="last-name"
                    placeholder="Apellido Materno"
                    required
                    value={selectedValueApellidoMaterno}
                    onValueChange={setSelectedValueApellidoMaterno}
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Correo electronico
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Correo electronico"
                    className="mt-2"
                    required
                    value={selectedValueCorreo1}
                    onValueChange={setSelectedValueCorreo1}
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Carrera
                    <span className="text-red-500">*</span>
                  </label>
                  <Select className='mt-2' required value={selectedValueCarrera} onValueChange={ setSelectedValueCarrera}>
                  {data.map(option => (
                    <SelectItem key={option.id} value={option.nombre}>{option.nomenclatura} - {option.nombre}</SelectItem>
                  ))}
                  </Select>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="Telefono"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Telefono
                  </label>
                  <TextInput
                    type="text"
                    id="Telefono"
                    name="Telefono"
                    autoComplete="Telefono"
                    placeholder="Telefono"
                    className="mt-2"
                    required
                    value={selectedValueTelefono}
                    onValueChange={value => setSelectedValueTelefono(value.slice(0, 10))}
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Direccion
                  </label>
                  <TextInput
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    placeholder="Direccion"
                    className="mt-2"
                    value={selectedValueDireccion}
                    onValueChange={setSelectedValueDireccion}
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Genero
                    <span className="text-red-500">*</span>
                  </label>
                  <Select className='mt-2' required onValueChange={setSelectedValue} value={selectedValue} >
                    <SelectItem value="Masculino">Masculino</SelectItem>
                    <SelectItem value="Femenino">Femenio</SelectItem>
                  </Select>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Estado Civil
                    <span className="text-red-500">*</span>
                  </label>
                  <Select className='mt-2' required onValueChange={setSelectedValueCivil} value={selectedValueCivil}>
                    <SelectItem value="Soltero">Soltero</SelectItem>
                    <SelectItem value="Soltera">Soltera</SelectItem>
                    <SelectItem value="Casado">Casado</SelectItem>
                    <SelectItem value="Casada">Casada</SelectItem>
                    <SelectItem value="Union Libre">Union Libre</SelectItem>
                    <SelectItem value="Divorciado">Divorciado</SelectItem>
                    <SelectItem value="Divorciada">Divorciada</SelectItem>
                    <SelectItem value="Viudo">Viudo</SelectItem>
                    <SelectItem value="Viuda">Viuda</SelectItem>
                  </Select>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    no. Control
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="noControl"
                    name="noControl"
                    autoComplete="noControl"
                    placeholder="numero de control"
                    className="mt-2"
                    required
                    value={selectedValueNoControl}
                    onValueChange={value => setSelectedValueNoControl(value.slice(0, 8))} // Limita el numero de caracteres a 8
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    no. Semestre
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="noSemestre"
                    name="noSemestre"
                    autoComplete="noSemestre"
                    placeholder="numero de semestre"
                    className="mt-2"
                    required
                    value={selectedValueSemestre}
                    onValueChange={value => setSelectedValueSemestre(value.slice(0, 2))}
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Plantel
                    <span className="text-red-500">*</span>
                  </label>
                  <Select className='mt-2' required onValueChange={setSelectedValuePlantel} value={selectedValuePlantel}>
                    <SelectItem value="Unidad Tomas Aquino">Unidad Tomas Aquino</SelectItem>
                    <SelectItem value="Unidad Otay">Unidad Otay</SelectItem>
                  </Select>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Correo Institucional
                  </label>
                  <TextInput
                    type="email"
                    id="CorreoInstitucional"
                    name="CorreoInstitucional"
                    autoComplete="CorreoInstitucional"
                    placeholder="Correo Institucional"
                    className="mt-2"
                    required
                    value={selectedValueCorreoInstitucional}
                    onValueChange={setSelectedValueCorreoInstitucional}
                  />
                </div>

              </div>
              
              <Divider />

              <div className="flex items-center justify-end space-x-4">
                <Button
                  type="button"
                  className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium"
                  onClick={onClose}
                  variant='secondary'
                >
                  Cancelar
                </Button>

                <Button
                  type="submit"
                  className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                  loading={isSaving}
                  loadingText='Guardando...'
                >
                  Guardar
                </Button>
              </div>
            </form>
          </div>

        </DialogPanel>

      </Dialog>
    );
}


