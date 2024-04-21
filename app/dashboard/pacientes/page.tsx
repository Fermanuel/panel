'use client';

import { TableUsageExample } from '../../components/index'
import { TextInput, Button } from '@tremor/react';
import { IoSearchOutline } from 'react-icons/io5';

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

            <div className='grid grid-cols-4 gap-3 pt-3'>
                <div className="w-full">
                    <TextInput
                        icon={IoSearchOutline}
                        placeholder="Buscar paciente"
                    />
                </div>
                <div className="min-w-12">
                    <Button
                        size='sm'
                    >
                        Buscar
                    </Button>
                </div>
            </div>

            <div className='pt-3'>
                <TableUsageExample />
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