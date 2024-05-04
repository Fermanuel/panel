import {create} from 'zustand';

interface Carrera {
  nombre: string;
  nomenclatura: string;
}

interface SchoolData {
  noControl: string;
  noSemestre: string;
  correoTec: string;
  plantel: string;
  carrera: Carrera;
}

interface Paciente {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  cumple: string;
  direccion: string;
  telefono: string;
  correoPer: string;
  estadoCivil: string;
  genero: string;
  schoolData: SchoolData;
}

interface PacienteStore {
  pacientes: Paciente[];
  fetchPacientes: () => Promise<void>;
}

export const useMostrarPacienteStore = create<PacienteStore>((set) => ({
  pacientes: [],
  fetchPacientes: async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pacientes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer tu_token' // si necesitas autenticación
        },
      });
      if (!response.ok) {
        throw new Error('Hubo un problema al hacer la solicitud: ' + response.status);
      }
      const data = await response.json();
      set({ pacientes: data });
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));
