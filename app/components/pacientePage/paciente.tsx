

import { IoHappyOutline } from 'react-icons/io5';

import DataTable from 'react-data-table-component';
import { Card, Badge, Button } from '@tremor/react';


//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
	rows: {
		style: {
			minHeight: '65px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

const columns = [
  {
    name: 'No. Control',
    selector: (row: { noControl: string; }) => row.noControl,
		reorder: true,
  },
  {
    name: 'Nombre',
    selector: (row: { nombre: string; }) => row.nombre,
    sortable: true,
		reorder: true,
    grow: 2,
  },
  {
    name: 'Carrera',
    selector: (row: { carrera: string; }) => row.carrera,
  },
  {
    name: 'Estatus',
    selector: (row: { estatus: string; }) => row.estatus
  },
  {
    name: 'Fecha de Nacimiento',
    selector: (row: { fechaNaciemiento: string; }) => row.fechaNaciemiento,
    sortable: true,
  },
  {
    name: 'Dirección',
    selector: (row: { direccion: string; }) => row.direccion,
  },
  {
    name: 'Telefono',
    selector: (row: { telefono: string; }) => row.telefono
  },
  {
    name: 'Correo Personal',
    selector: (row: { correo1: string; }) => row.correo1,
    reorder: true,
    grow: 2,
  },
  {
    name: 'Correo Institucional',
    selector: (row: { correoInstitucional: string; }) => row.correoInstitucional,
    reorder: true,
    grow: 3,
  },
  {
    name: 'Genero',
    selector: (row: { genero: string; }) => row.genero
  },
  {
    name: 'Estado Civil',
    selector: (row: { estadoCivil: string; }) => row.estadoCivil
  },
  {
    name: 'Semestre',
    selector: (row: { semestre: string; }) => row.semestre
  },
  {
    name: 'Plantel',
    selector: (row: { plantel: string; }) => row.plantel,
    reorder: true,
    grow: 2,
  }
];

const dataItems = [
  {
    noControl: "21210371",
    nombre: "Fernando Manuel Espinosa Inzuza",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-09-01",
    direccion: "Calle 1 #123",
    telefono: "1234567890",
    correo1: "manuelhola9@gmail.com",
    correoInstitucional: "l21210371@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210372",
    nombre: "Ana Karen Pérez López",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-05-15",
    direccion: "Calle 2 #456",
    telefono: "0987654321",
    correo1: "anakaren@gmail.com",
    correoInstitucional: "l21210372@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210373",
    nombre: "Juan Carlos García Ramírez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1999-11-20",
    direccion: "Calle 3 #789",
    telefono: "1357924680",
    correo1: "juancarlos@gmail.com",
    correoInstitucional: "l21210373@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "6",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210374",
    nombre: "María Fernanda Gómez Pérez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1996-03-10",
    direccion: "Calle 4 #1011",
    telefono: "2468013579",
    correo1: "mafer@gmail.com",
    correoInstitucional: "l21210374@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Casada",
    semestre: "9",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210375",
    nombre: "Luis Alberto González Hernández",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-08-25",
    direccion: "Calle 5 #1213",
    telefono: "9876543210",
    correo1: "luisalberto@gmail.com",
    correoInstitucional: "l21210375@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210376",
    nombre: "Karla Vanessa Torres García",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-12-05",
    direccion: "Calle 6 #1415",
    telefono: "3692581470",
    correo1: "karla@gmail.com",
    correoInstitucional: "l21210376@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210377",
    nombre: "Javier Alejandro Martínez Sánchez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1999-02-18",
    direccion: "Calle 7 #1617",
    telefono: "7418529630",
    correo1: "javier@gmail.com",
    correoInstitucional: "l21210377@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "6",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210378",
    nombre: "Erika Guadalupe Hernández Rodríguez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-07-30",
    direccion: "Calle 8 #1819",
    telefono: "8529637410",
    correo1: "erika@gmail.com",
    correoInstitucional: "l21210378@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Casada",
    semestre: "9",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210379",
    nombre: "Pedro José Ramírez González",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-04-22",
    direccion: "Calle 9 #2021",
    telefono: "9638527410",
    correo1: "pedro@gmail.com",
    correoInstitucional: "l21210379@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210380",
    nombre: "Diana Laura Martínez Pérez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1996-10-07",
    direccion: "Calle 10 #2223",
    telefono: "7410258963",
    correo1: "diana@gmail.com",
    correoInstitucional: "l21210380@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210381",
    nombre: "Carlos Alberto López García",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1999-03-12",
    direccion: "Calle 11 #2325",
    telefono: "3691472580",
    correo1: "carlos@gmail.com",
    correoInstitucional: "l21210381@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210382",
    nombre: "María José Rodríguez Pérez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-07-05",
    direccion: "Calle 12 #2527",
    telefono: "8520147963",
    correo1: "mariajose@gmail.com",
    correoInstitucional: "l21210382@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210383",
    nombre: "José Luis Pérez Hernández",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-11-20",
    direccion: "Calle 13 #2729",
    telefono: "1239876540",
    correo1: "joseluis@gmail.com",
    correoInstitucional: "l21210383@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "6",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210384",
    nombre: "Laura Gabriela Gutiérrez Torres",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1999-09-15",
    direccion: "Calle 14 #2931",
    telefono: "9876543210",
    correo1: "laura@gmail.com",
    correoInstitucional: "l21210384@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Casada",
    semestre: "9",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210385",
    nombre: "Daniel Alejandro Martínez García",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-05-18",
    direccion: "Calle 15 #3133",
    telefono: "3692581470",
    correo1: "daniel@gmail.com",
    correoInstitucional: "l21210385@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210386",
    nombre: "Ana Sofía Hernández Ramírez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-12-20",
    direccion: "Calle 16 #3335",
    telefono: "7418529630",
    correo1: "anasofia@gmail.com",
    correoInstitucional: "l21210386@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210387",
    nombre: "Roberto Carlos García Pérez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1996-08-30",
    direccion: "Calle 17 #3537",
    telefono: "8529637410",
    correo1: "roberto@gmail.com",
    correoInstitucional: "l21210387@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Casado",
    semestre: "9",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210388",
    nombre: "María Fernanda Pérez López",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1999-02-28",
    direccion: "Calle 18 #3739",
    telefono: "9638527410",
    correo1: "maferperez@gmail.com",
    correoInstitucional: "l21210388@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "7",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210389",
    nombre: "Miguel Ángel Torres Rodríguez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-10-10",
    direccion: "Calle 19 #3941",
    telefono: "7410258963",
    correo1: "miguel@gmail.com",
    correoInstitucional: "l21210389@tectijuana.edu.mx",
    genero: "Masculino",
    estadoCivil: "Soltero",
    semestre: "8",
    plantel: "Unidad Tomas Aquino"
  },
  {
    noControl: "21210390",
    nombre: "Gabriela Martínez Sánchez",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1997-06-25",
    direccion: "Calle 20 #4143",
    telefono: "3691472580",
    correo1: "gabriela@gmail.com",
    correoInstitucional: "l21210390@tectijuana.edu.mx",
    genero: "Femenino",
    estadoCivil: "Soltera",
    semestre: "9",
    plantel: "Unidad Tomas Aquino"
  }
];


export function TableUsageExample() {
  return (
    <Card className='text-tremor-default'>
      <DataTable
        
        title="Pacientes registrados"
        customStyles={customStyles}
        fixedHeader={true}
        
        columns={columns as any}
        data={dataItems}
        selectableRows={true}

        pagination={true}
        paginationPerPage={10}
        paginationComponentOptions={
          {
            rowsPerPageText: 'Filas por página',
            rangeSeparatorText: 'de',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'Todos',
          }
        }
        onSelectedRowsChange={data => console.log(data)}

        highlightOnHover={true}
        pointerOnHover={true}
      />
    </Card>
  )
}