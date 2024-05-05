import { Dialog, DialogPanel, Button, List, ListItem, Divider } from '@tremor/react';
import { useModalBorrar, useDeletePacienteStore } from '../../store/index';

import { IoAlertCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

// TODO: poder usar el modal para borrar pacientes y darle un mejor diseño

export function ModalBorrar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {
  
  const { patientid, selectedPatient , clearSelectedPatient } = useModalBorrar();
  const { deletePaciente } = useDeletePacienteStore();

  // * SIRVE PARA SIMULAR EL ENVIO DE DATOS DEL PACIENTE
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isSaving) {
      // * Simula un retraso de 2 segundos para la solicitud DELETE.
      const timer = setTimeout(() => {
        setIsSaving(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSaving]);

  const handleDeleteClick = async () => {

    // * AQUÍ DEBERÍAS LLAMAR A LA FUNCIÓN DELETEPACIENTE DEL STORE
    await deletePaciente(patientid); // Asegúrate de que selectedPatient tiene un campo id
    setIsSaving(true);
    clearSelectedPatient();
    onClose();
  };


  return (
    // TODO: cambiar el diseño del modal para que se vea mejor por un lista de pacientes y no solo un paciente

    <Dialog open={isOpen} onClose={onClose} static={true}>
      <DialogPanel title="Borrar paciente">
        <div>
            <div className="justify-start">
              <div className="flex justify-start items-center">
                <IoAlertCircleOutline color="#ef4444" className="mr-2" size={'4rem'} />
                <span className="text-tremor-title">
                  ¿Estás seguro de que quieres borrar a este paciente?
                </span>
              </div>
              <List>
                {Array.isArray(selectedPatient) && selectedPatient.map((patient: any, index: any) => (
                  <ListItem key={index}>{patient}</ListItem>
                ))}
              </List>
            </div>
          <Divider />
          <div className="flex justify-end">
            <Button className="mr-2" variant="primary" color='red'
              onClick={() => {
                handleDeleteClick();
              }}
              loading={isSaving}
              loadingText='Borrando...'
            >
              Confirmar
            </Button>
            <Button onClick={onClose} variant="secondary" color='yellow'>
              Cancelar
            </Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
