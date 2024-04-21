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
                    Correo electrónico
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Correo electrónico"
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

                <div className="col-span-full sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    City
                  </label>
                  <TextInput
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="City"
                    className="mt-2"
                  />
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    State
                  </label>
                  <TextInput
                    type="text"
                    id="state"
                    name="state"
                    autoComplete="address-level1"
                    placeholder="State"
                    className="mt-2"
                  />
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Postal code
                  </label>
                  <TextInput
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    placeholder="Postal code"
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
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

        </DialogPanel>

      </Dialog>
    );
}


