'use client';

import { TableUsageExample } from '../../components/index'
import { Button } from '@tremor/react';

import { ModalPaciente } from '../../components/index';
import { useState } from 'react';


export default function pacientesPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    
    return (
        <div className="container mx-auto px-5">

            <div className='pt-3'>
                <TableUsageExample/>
            </div>

            <div className='pt-3 flex justify-end'>
                <Button
                    size='sm'
                    onClick={openModal}
                >
                    Agregar nuevo paciente
                </Button>
            </div>

            <ModalPaciente isOpen={isModalOpen} onClose={closeModal} />

        </div>
    )
}