import { Dialog, DialogPanel, Button, List, ListItem, Divider } from '@tremor/react';
import { useModalBorrar } from '../../store/index';

import { IoAlertCircleOutline } from 'react-icons/io5';

// TODO: poder usar el modal para borrar pacientes y darle un mejor diseño

export function ModalBorrar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {
  const { selectedPatient, clearSelectedPatient } = useModalBorrar();

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
                clearSelectedPatient();
                onClose();
              }}
            >
              Sí
            </Button>
            <Button onClick={onClose} variant="secondary" color='yellow'>
              No
            </Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
