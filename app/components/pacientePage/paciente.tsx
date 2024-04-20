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
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Albert Rösti',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Beat Jans',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
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
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.Role}
              </TableCell>
              <TableCell>
                {item.departement}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={IoHappyOutline}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}