// ModalPaciente.jsx

import { Dialog, DialogPanel, Button, Divider, TextInput, Select, SelectItem, DatePicker } from '@tremor/react';

import { useModalStore } from '../../store/index'
import { useEffect, useState } from 'react';

export function ModalPaciente({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {

  const { selectedPatient } = useModalStore();

  const [selectedValue, setSelectedValue] = useState(selectedPatient?.genero);
  const [selectedValueCivil, setSelectedValueCivil] = useState(selectedPatient?.estadoCivil);
  const [selectedValuePlantel, setSelectedValuePlantel] = useState(selectedPatient?.plantel);
  const [selectedValueCarrera, setSelectedValueCarrera] = useState(selectedPatient?.carrera);
  const [selectedValueSemestre, setSelectedValueSemestre] = useState(selectedPatient?.semestre);
  const [selectedValueCorreoInstitucional, setSelectedValueCorreoInstitucional] = useState(selectedPatient?.correoInstitucional);
  const [selectedValueTelefono, setSelectedValueTelefono] = useState(selectedPatient?.telefono);
  const [selectedValueDireccion, setSelectedValueDireccion] = useState(selectedPatient?.direccion);
  const [selectedValueFechaNacimiento, setSelectedValueFechaNacimiento] = useState(selectedPatient?.fechaNacimiento);
  const [selectedValueNoControl, setSelectedValueNoControl] = useState(selectedPatient?.noControl);
  const [selectedValueNombre, setSelectedValueNombre] = useState(selectedPatient?.nombre);
  const [selectedValueApellidoPaterno, setSelectedValueApellidoPaterno] = useState(selectedPatient?.apellidoPaterno);
  const [selectedValueApellidoMaterno, setSelectedValueApellidoMaterno] = useState(selectedPatient?.apellidoMaterno);
  const [selectedValueCorreo1, setSelectedValueCorreo1] = useState(selectedPatient?.correo1);


  // ! NO ME DEJA CAMBIAR LOS VALORES DE LOS INPUTS
  useEffect(() => {

    if(selectedPatient) {
      setSelectedValue(selectedPatient.genero);
      setSelectedValueCivil(selectedPatient.estadoCivil);
      setSelectedValuePlantel(selectedPatient.plantel);
      setSelectedValueCarrera(selectedPatient.carrera);
      setSelectedValueSemestre(selectedPatient.semestre);
      setSelectedValueCorreoInstitucional(selectedPatient.correoInstitucional);
      setSelectedValueTelefono(selectedPatient.telefono);
      setSelectedValueDireccion(selectedPatient.direccion);
      setSelectedValueFechaNacimiento(selectedPatient.fechaNacimiento);
      setSelectedValueNoControl(selectedPatient.noControl);
      setSelectedValueNombre(selectedPatient.nombre);
      setSelectedValueApellidoPaterno(selectedPatient.apellidoPaterno);
      setSelectedValueApellidoMaterno(selectedPatient.apellidoMaterno);
      setSelectedValueCorreo1(selectedPatient.correo1);
      
    }
  }, [selectedPatient]);

  // TODO: Implementar la logica para guardar los datos del paciente mediante le metodo POST
  
    
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
            
            <form action="#" method="post" className="mt-10">
              
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
                    displayFormat = "yyyy-MM-dd"
                    value={selectedValueFechaNacimiento}
                    onValueChange={setSelectedValueFechaNacimiento}
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
                  <Select className='mt-2' required value={selectedValueCarrera} onValueChange={setSelectedValueCarrera}>
                    <SelectItem value="ing. en sistemas computacionales">Ing. Sistemas Computacionales</SelectItem>
                    <SelectItem value="Ing. Informatica">Ing. Informatica</SelectItem>
                    <SelectItem value="Ing. Industrial">Ing. Industrial</SelectItem>
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
                    onValueChange={setSelectedValueTelefono}
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
                    <SelectItem value="Casado">Casado</SelectItem>
                    <SelectItem value="Union Libre">Union Libre</SelectItem>
                    <SelectItem value="Soltera">Soltera</SelectItem>
                    <SelectItem value="Casada">Casada</SelectItem>
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
                    onValueChange={setSelectedValueNoControl}
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
                    onValueChange={setSelectedValueSemestre}
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
                  loading={false}
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


