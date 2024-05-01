'use client';

import { ModalBorrar, TableUsageExample } from '../../components/index'
import { Button } from '@tremor/react';

import { ModalPaciente} from '../../components/index';

import { IoPersonAddOutline } from 'react-icons/io5';
import { useModalBorrar, useModalStore } from '../../store/index';

// TODO: poder usar el modal para borrar pacientes

export default function pacientesPage() {

    const { isModalOpen, openModal ,closeModal, clearSelectedPatient } = useModalStore();
    const { isModalBorrarOpen, closeModalBorrar } = useModalBorrar();

    const handleOpenModal = () => {
        
        clearSelectedPatient();
        openModal({});
    };
    
    return (
        <div className="container mx-auto px-5">

            <div className='pt-3'>
                <TableUsageExample/>
            </div>

            <div className='pt-3 flex justify-end'>
                <Button size='sm' onClick={handleOpenModal} icon={IoPersonAddOutline}>
                    Nuevo paciente
                </Button>
            </div>

            <ModalPaciente isOpen={isModalOpen} onClose={closeModal}/>
            <ModalBorrar isOpen={isModalBorrarOpen} onClose={closeModalBorrar}/>

        </div>
    )
}
