

import { IoHappyOutline, IoSearchOutline, IoTrashOutline, IoCreateOutline, IoLogoWhatsapp } from 'react-icons/io5';

import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import { Card, Badge, List, ListItem, TextInput, Button } from '@tremor/react';

import { useEffect, useState, useMemo, useCallback } from 'react';

import { useModalStore, useModalBorrar } from '../../store/index';


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

// TODO: HACER EL GET AL BACKEND PARA OBTENER LOS DATOS DE LOS PACIENTES DATOS DE LOS PACIENTES

const dataItems = [
  {
    nombre: "Fernando Manuel",
    apellidoPaterno: "Espinosa",
    apellidoMaterno: "Inzunza",
    cumple: "1998-13-02",
    direccion: "Rosarito, Baja California, Colonia Centro, 22710",
    telefono: "6642303206",
    correoPer: "fer.espinosa@gmail.com",
    genero: "Masculino",
    estadoCivil: "Soltero",
    estatus: "Activo",
    schoolData: {
      noControl: "21210355",
      noSemestre: "7",
      correoTec: "l21210356@tectijuana.edu.mx",
      plantel: "Unidad Tomas Aquino",
      carrera: {
        carreraNombre: "Ing. en sistemas computacionales",
      }
    }
  },
  {
    nombre: "José Luis",
    apellidoPaterno: "García",
    apellidoMaterno: "Martínez",
    cumple: "1997-08-21",
    direccion: "Rosarito, Baja California, Colonia Reforma, 22710",
    telefono: "6641875432",
    correoPer: "jl.garcia@example.com",
    genero: "Masculino",
    estadoCivil: "Soltero",
    estatus: "Activo",
    schoolData: {
      noControl: "21210356",
      noSemestre: "9",
      correoTec: "jl.garcia@tectijuana.edu.mx",
      plantel: "Unidad Tomas Aquino",
      carrera: {
        carreraNombre: "Ing. en sistemas computacionales"
      }
    }
  },
  {
    nombre: "Ana Karen",
    apellidoPaterno: "Hernández",
    apellidoMaterno: "Sánchez",
    cumple: "1999-05-17",
    direccion: "Rosarito, Baja California, Colonia del Valle, 22710",
    telefono: "6643329988",
    correoPer: "ana.hernandez@example.com",
    genero: "Femenino",
    estadoCivil: "Soltero",
    estatus: "Activo",
    schoolData: {
      noControl: "21210357",
      noSemestre: "5",
      correoTec: "ana.hernandez@tectijuana.edu.mx",
      plantel: "Unidad Tomas Aquino",
      carrera: {
        carreraNombre: "Ing. en sistemas computacionales"
      }
    }
  }  
];


const ExpandedComponent: React.FC<ExpanderComponentProps<any>> = ({ data }) => {

  // * Estado para el número de teléfono de cada paciente
  let [telefono, setTelefono] = useState('');

  useEffect(() => {

    telefono = data.telefono;

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
            <span>{data.correoPer}</span>
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
            <span>{data.schoolData.noSemestre}</span>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};



export function TableUsageExample() {

  const { openModal, clearSelectedPatient } = useModalStore();
  const { openModalBorrar } = useModalBorrar();

  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);
  
  // * FUNCIONES PARA EDITAR PACIENTE
  const handleEdit = (row: any) => {
    if (selectedRows.length > 0 && selectedRows[0] === row) {
      openModal(row);
    } else {
      alert('Selecciona solo un paciente para editar');
    }
  };

  // * LIMPIA EL PACIENTE SELECCIONADO ( PARA EDITAR EN EL MODAL )
  useEffect(() => {
    clearSelectedPatient();
  },[]);

  // * FUNCION PARA ELIMINAR PACIENTE
  const handleDelete = () => {
    if (selectedRows.length > 0) {
      openModalBorrar(selectedRows?.map((row: any) => [row.nombre, row.apellidoPaterno, row.apellidoMaterno].join(" ")));
    } else {
      alert('Selecciona al menos un paciente para eliminar');
    }
  };

  const handleChange = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  // TODO: AGREGAR COLUMNA DE NUMERO DE SESIONES QUE LLEVA CADA PACIENTE
  const columns = useMemo(
    () => [
      {
        name: "No. Control",
        selector: (row: { schoolData: { noControl: string }, noControl: string}) => row.schoolData.noControl,
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        name: "Nombre",
        selector: (row: {schoolData: { correoTec: string; } ,correoTec: string; nombre: string, apellidoPaterno: string, apellidoMaterno: string }) => (
          <>
            {row.nombre} {row.apellidoPaterno} {row.apellidoMaterno}
            <br />
            <span className="text-tremor-label">{row.schoolData.correoTec}</span>
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
        selector: (row: {schoolData: { carrera: { carreraNombre: string } ,plantel: string }}) => (
          <>
            {row.schoolData.carrera.carreraNombre}
            <br />
            <span className="text-tremor-label">{row.schoolData.plantel}</span>
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
        selector: (row: { cumple: Date }) => row.cumple,
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
          <Button className='mr-1.5' color='yellow' variant='primary' size='xs' icon={IoCreateOutline} onClick={() => handleEdit(row)}/>
          <Button color='red' variant='primary' size='xs' icon={IoTrashOutline} onClick={handleDelete}/>
        </div>,
      },
    ],
    // ! EL MODAL SE HABRE SOLO SI SE SELECCIONA UNA SOLA FILA
    [selectedRows]
  );

  // * FILTRA LOS DATOS DE LA TABLA POR "NO. CONTROL" Y "NOMBRE"

  const [records, setRecords] = useState(dataItems);

  const handleSearch = (e: any) => {
    const value = e.target.value.toLowerCase();
    const filteredData = dataItems.filter((item) => {
      return (
        item.schoolData.noControl.toLowerCase().includes(value) ||
        item.nombre.toLowerCase().includes(value) ||
        item.apellidoPaterno.toLowerCase().includes(value) ||
        item.apellidoMaterno.toLowerCase().includes(value)
      );
    });
    setRecords(filteredData);
  };

  return (

    <Card className="text-tremor-default">
      
      <div className="grid grid-cols-4 gap-3 pt-3">
        <div className="col-start-4">
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