

import { IoHappyOutline, IoSearchOutline, IoTrashOutline, IoCreateOutline, IoLogoWhatsapp } from 'react-icons/io5';

import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import { Card, Badge, List, ListItem, TextInput, Button } from '@tremor/react';

import { useEffect, useState, useMemo, useCallback } from 'react';

import { useModalStore } from '../../store/index';


// * ESTILOS DE LA TABLA
const customStyles = {
	headRow: {
		style: {
			border: 'none',
		},
	},
	headCells: {
		style: {
			color: '#202124',
			fontSize: '14px',
		},
	},
	rows: {
		highlightOnHoverStyle: {
			backgroundColor: 'rgb(230, 244, 244)',
			borderBottomColor: '#FFFFFF',
			borderRadius: '25px',
			outline: '1px solid #FFFFFF',
		},
	},
	pagination: {
		style: {
			border: 'none',
		},
	},
};

const dataItems = [
  {
    noControl: "21210371",
    nombre: "Fernando Manuel Espinosa Inzuza",
    carrera: "ing. en sistemas computacionales",
    estatus: "active",
    fechaNaciemiento: "1998-09-01",
    direccion: "Calle 1 #123",
    telefono: "6646758501",
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


const ExpandedComponent: React.FC<ExpanderComponentProps<any>> = ({ data }) => {


  // * Estado para el número de teléfono de cada paciente
  const [telefono, setTelefono] = useState('');

  useEffect(() => {

    // * Establece el número de teléfono en el estado
    setTelefono(telefono);

    // * Cambia el href del enlace
    const whatsappLink = document.getElementById("whatsappLink") as HTMLAnchorElement;
    
    if (whatsappLink) {
      whatsappLink.href = `https://api.whatsapp.com/send?phone=521${telefono}`;
    }
  }, []);

  return (
    <div className="ml-4 p-4">

      <Card decoration="top" decorationColor="indigo" className="max-w-md">
        <List>
          <ListItem>
            <span>Dirección:</span>
            <span>{data.direccion}</span>
          </ListItem>
          <ListItem>
            <span>Teléfono:</span>
            <a
              id="whatsappLink"
              href="#"
              target="_blank"
              className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300"
            >
              <div className='flex items-center'>
                <IoLogoWhatsapp className="mr-1.5" />
                <span>{data.telefono}</span>
              </div>
            </a>
          </ListItem>
          <ListItem>
            <span>Correo Personal:</span>
            <span>{data.correo1}</span>
          </ListItem>
          <ListItem>
            <span>Género:</span>
            <span>{data.genero}</span>
          </ListItem>
          <ListItem>
            <span>Estado Civil:</span>
            <span>{data.estadoCivil}</span>
          </ListItem>
          <ListItem>
            <span>Semestre:</span>
            <span>{data.semestre}</span>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};



export function TableUsageExample() {

  const { openModal } = useModalStore();

  // * COLUMNA DE LA TABLA "NO MODIFICAR" SOLO SI ES 100% NECESARIO
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

  // const handleEdit = (row: any) => {
  //   console.log('editado');
  //   openModal(row);
  // };

  const handleEdit = (row: any) => {
    if (selectedRows.length === 1 && selectedRows[0] === row) {
      console.log('editado');
      openModal(row);
    } else {
      console.log('Seleccione una sola fila para editar.');
    }
  };

  const handleDelete = () => {
    console.log('eliminado');
  };

  const handleChange = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  // TODO: AGREGAR COLUMNA DE NUMERO DE SESIONES QUE LLEVA CADA PACIENTE
  const columns = useMemo(
    () => [
      {
        name: "No. Control",
        selector: (row: { noControl: string }) => row.noControl,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Nombre",
        selector: (row: { correoInstitucional: string; nombre: string }) => (
          <>
            {row.nombre}
            <br />
            <span className="text-tremor-label">{row.correoInstitucional}</span>
          </>
        ),
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
        width: "250px",
      },
      {
        name: "Carrera",
        selector: (row: { carrera: string; plantel: string }) => (
          <>
            {row.carrera}
            <br />
            <span className="text-tremor-label">{row.plantel}</span>
          </>
        ),
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
        width: "250px",
      },
      {
        name: "Estatus",

        cell: (row: { estatus: string }) => (
          <Badge size="xs" icon={IoHappyOutline} color='emerald' tooltip='paciente activo'>
            {row.estatus}
          </Badge>
        ),
      },
      {
        name: "Nacimiento",
        selector: (row: { fechaNaciemiento: string }) => row.fechaNaciemiento,
        sortable: true,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Genero",
        selector: (row: { genero: string }) => row.genero,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Opciones",
        cell: (row: any) => 
        <div className="inline-flex items-center rounded-md shadow-sm">
          <Button className='mr-1.5' color='yellow' variant='primary' size='xs' icon={IoCreateOutline} onClick={() => handleEdit(row)}/> {/* onClick={() => handleEdit(row)} */}
          <Button color='red' variant='primary' size='xs' icon={IoTrashOutline} onClick={handleDelete}/>
        </div>,
      },
    ],
    // ! EL MODAL SE HABRE SOLO SI SE SELECCIONA UNA SOLA FILA
    [selectedRows, handleEdit, {/* AQUI AGREGAR EL MODAL DE ELIMIANR */}]
  );

  // * FILTRA LOS DATOS DE LA TABLA POR "NO. CONTROL" Y "NOMBRE"

  const [records, setRecords] = useState(dataItems);

  const handleSearch = (e: any) => {
    const value = e.target.value.toLowerCase();
    const filteredData = dataItems.filter((item) => {
      return (
        item.noControl.toLowerCase().includes(value) ||
        item.nombre.toLowerCase().includes(value)
      );
    });
    setRecords(filteredData);
  };

  return (

    <Card className="text-tremor-default">
      
      <div className="grid grid-cols-4 gap-3 pt-3">
        <div className="w-full">
          <TextInput
            icon={IoSearchOutline}
            placeholder="Buscar paciente"
            onChange={handleSearch}
          />
        </div>
      </div>

      <DataTable
        title="Pacientes registrados"
        customStyles={customStyles}
        fixedHeader={true}

        columns={columns as any}
        data={records}
        selectableRows={true}

        pagination={true}
        paginationPerPage={10}

        paginationComponentOptions={{
          rowsPerPageText: "Filas por página",
          rangeSeparatorText: "de",
          selectAllRowsItem: true,
          selectAllRowsItemText: "Todos",
        }}

        onSelectedRowsChange={handleChange}
        highlightOnHover={true}
        pointerOnHover={true}

        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
        expandableRowsHideExpander={true}
        expandOnRowClicked={true}
      />
    </Card>
  );
}