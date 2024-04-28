'use client';

import { TableUsageExample } from '../../components/index'
import { Button } from '@tremor/react';

import { ModalPaciente } from '../../components/index';
import { useState } from 'react';

import { IoPersonAddOutline } from 'react-icons/io5';
import { useModalStore } from '@/app/store';


export default function pacientesPage() {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    const { isModalOpen, closeModal } = useModalStore();

    const openModal = () => {
        // Aquí puedes pasar los datos del nuevo paciente si los tienes
        useModalStore.getState().openModal({}); 
    };

    
    return (
        <div className="container mx-auto px-5">

            <div className='pt-3'>
                <TableUsageExample/>
            </div>

            <div className='pt-3 flex justify-end'>
                <Button size='sm' onClick={openModal} icon={IoPersonAddOutline}>
                    Nuevo paciente
                </Button>
            </div>

            <ModalPaciente isOpen={isModalOpen} onClose={closeModal}/>

        </div>
    )
}