import { Dialog, DialogPanel } from '@tremor/react';


// TODO: poder usar el modal para borrar pacientes y darle un mejor diseño

export function ModalBorrar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void}) {
    return (
        <Dialog open={isOpen} onClose={onClose} static={true}>
            <DialogPanel title='Borrar paciente'>
                <div>
                    ¿Estás seguro de que quieres borrar a este paciente?
                </div>
            </DialogPanel>
        </Dialog>
    );
}
