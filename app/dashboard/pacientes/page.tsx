'use client';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { RiSearchLine } from '@remixicon/react';


const data = [
  {
    carrera: 'Sistemas Computacionales',
    nombre: 'John Doe',
    estatus: 'Activo',
    semestre: '1',
    telefono: '1234567890',
    direccion: 'Calle 123, Colonia 456',
    numerodeSesion: '1',
    ultcita: '23/09/2023 13:00',
  },
  {
    carrera: 'Ingeniería en Sistemas',
    nombre: 'Mark Johnson',
    estatus: 'Activo',
    semestre: '2',
    telefono: '5555555555',
    direccion: 'Avenida 789, Colonia 456',
    numerodeSesion: '4',
    ultcita: '29/09/2023 09:15',
  },
  {
    carrera: 'Medicina',
    nombre: 'Alice Johnson',
    estatus: 'Inactivo',
    semestre: '5',
    telefono: '5555555555',
    direccion: 'Boulevard 789, Colonia 123',
    numerodeSesion: '3',
    ultcita: '27/09/2023 15:45',
  },
  {
    carrera: 'Diseño Gráfico',
    nombre: 'Jane Smith',
    estatus: 'Activo',
    semestre: '3',
    telefono: '9876543210',
    direccion: 'Avenida 456, Colonia 789',
    numerodeSesion: '2',
    ultcita: '25/09/2023 11:30',
  },
  {
    carrera: 'Arquitectura',
    nombre: 'Michael Brown',
    estatus: 'Inactivo',
    semestre: '4',
    telefono: '9999999999',
    direccion: 'Calle 789, Colonia 123',
    numerodeSesion: '5',
    ultcita: '01/10/2023 14:45',
  },
];


export default function Example() {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
      <div>
        <h2 className="font-semibold text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong">Pacientes</h2>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Listado de pacientes registrados en el sistema
        </p>
      </div>
      <button
        type="button"
        className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
      >
        Añadir Paciente
      </button>
      </div>
      <Table className="mt-8">
      <TableHead>
        <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Carrera</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Nombre</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Estatus</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Semestre</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Telefono</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Direccion</TableHeaderCell>
        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">Numero de Sesion</TableHeaderCell>
        <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">Ultima Cita</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
        <TableRow key={item.carrera}>
          <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">{item.carrera}</TableCell>
          <TableCell>{item.nombre}</TableCell>
          <TableCell
          className={`animate-pulse ${
            item.estatus.toLowerCase() === 'activo' ? 'text-green-500 shadow-green-500/50' : 'text-red-500 shadow-red-500/50'
          }`}
          >
          {item.estatus}
          </TableCell>
          <TableCell>{item.semestre}</TableCell>
          <TableCell>{item.telefono}</TableCell>
          <TableCell>{item.direccion}</TableCell>
          <TableCell>{item.numerodeSesion}</TableCell>
          <TableCell className="text-right">{item.ultcita}</TableCell>
        </TableRow>
        ))}
      </TableBody>
      </Table>
    </>
    );
}

