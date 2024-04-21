import { IoHappyOutline } from 'react-icons/io5';

import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

const data = [
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
  {
    noControl: '21210371',
    nombre: 'Fernando Manuel Espinosa Inzuza',
    carrera: 'ing. en sistemas computacionales',
    estatus: 'active',
    fechaNaciemiento: '1998-09-01',
    direccion: 'Calle 1 #123',
    telefono: '1234567890',
    correo1: 'manuelhola9@gmail.com',
    correoInstitucional: 'l21210371@tectijuana.edu.mx',
    genero: 'Masculino',
    estadoCivil: 'Soltero',
    semestre: '7',
    plantel: 'Unidad Tomas Aquino'
  },
];

export function TableUsageExample() {
  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Lista de pacientes</h3>
      <Table className="mt-5">
        <TableHead>
          
          <TableRow>
            <TableHeaderCell>No Control</TableHeaderCell>
            <TableHeaderCell>Nombre Completo</TableHeaderCell>
            <TableHeaderCell>Carrera</TableHeaderCell>
            <TableHeaderCell>Estatus</TableHeaderCell>
            <TableHeaderCell>Fecha Naciemiento</TableHeaderCell>
            <TableHeaderCell>Direccion</TableHeaderCell>
            <TableHeaderCell>Telefono</TableHeaderCell>
            <TableHeaderCell>Correo 1</TableHeaderCell>
            <TableHeaderCell>Correo Institucional</TableHeaderCell>
            <TableHeaderCell>Genero</TableHeaderCell>
            <TableHeaderCell>Estado Civil</TableHeaderCell>
            <TableHeaderCell>Semestre</TableHeaderCell>
            <TableHeaderCell>Plantel</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.noControl}>
              <TableCell>{item.noControl}</TableCell>
              
              <TableCell>
                {item.nombre}
              </TableCell>

              <TableCell>
                {item.carrera}
              </TableCell>

              <TableCell>
                <Badge color="emerald" icon={IoHappyOutline}>
                  {item.estatus}
                </Badge>
              </TableCell>

              <TableCell>
                {item.fechaNaciemiento}
              </TableCell>

              <TableCell>
                {item.direccion}
              </TableCell>

              <TableCell>
                {item.telefono}
              </TableCell>

              <TableCell>
                {item.correo1}
              </TableCell>

              <TableCell>
                {item.correoInstitucional}
              </TableCell>

              <TableCell>
                {item.genero}
              </TableCell>

              <TableCell>
                {item.estadoCivil}
              </TableCell>

              <TableCell>
                {item.semestre}
              </TableCell>

              <TableCell>
                {item.plantel}
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}