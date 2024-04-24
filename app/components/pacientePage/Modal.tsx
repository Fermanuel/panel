// ModalPaciente.jsx

import { Dialog, DialogPanel, Button, Divider, TextInput, Select, SelectItem, DatePicker } from '@tremor/react';

export function ModalPaciente({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    
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
                  <Select className='mt-2' required>
                    <SelectItem value="1">Ing. Sistemas Computacionales</SelectItem>
                    <SelectItem value="2">Ing. Informatica</SelectItem>
                    <SelectItem value="3">Ing. Industrial</SelectItem>
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
                  <Select className='mt-2' required>
                    <SelectItem value="1">Masculino</SelectItem>
                    <SelectItem value="2">Femenio</SelectItem>
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
                  <Select className='mt-2' required>
                    <SelectItem value="1">Soltero</SelectItem>
                    <SelectItem value="2">Casado</SelectItem>
                    <SelectItem value="3">Union Libre</SelectItem>
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
                  <Select className='mt-2' required>
                    <SelectItem value="1">Unidad Tomas Aquino</SelectItem>
                    <SelectItem value="2">Unidad Otay</SelectItem>
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


