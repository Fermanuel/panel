'use client';

import { TableUsageExample } from '../../components/index'
import { TextInput, Button } from '@tremor/react';
import { IoSearchOutline } from 'react-icons/io5';

export default function pacientesPage() {
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
                >
                    Agregar nuevo paciente
                </Button>
            </div>

        </div>
    )
}