import { Dialog, DialogPanel, Button } from '@tremor/react';
import { useModalBorrar } from '../../store/index';

// TODO: poder usar el modal para borrar pacientes y darle un mejor diseño

export function ModalBorrar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {

    const { selectedPatient, clearSelectedPatient } = useModalBorrar();

    return (
        <Dialog open={isOpen} onClose={onClose} static={true}>
            <DialogPanel title='Borrar paciente'>
                <div>
                    <div className='flex justify-start'>
                        <span className='text-tremor-title'>¿Estás seguro de que quieres borrar a este paciente?</span>
                        <span className='mr-2 mt-2 text-tremor-label'>{selectedPatient}</span>
                    </div>
                    <div className='flex justify-end'>
                        <Button className='mr-2' onClick={() => {clearSelectedPatient(); onClose();}} variant='primary'>Sí</Button>
                        <Button onClick={onClose} variant='secondary'>No</Button>
                    </div>
                        

                </div>
            </DialogPanel>
        </Dialog>
    );
}
