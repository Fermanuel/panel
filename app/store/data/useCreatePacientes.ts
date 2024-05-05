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
  paciente: Paciente | null;
  createPaciente: (pacienteData: Paciente) => Promise<void>;
}

export const usePacienteStore = create<PacienteStore>((set) => ({

  paciente: null,
  createPaciente: async (pacienteData: Paciente) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pacientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer tu_token' // si necesitas autenticación
        },
        body: JSON.stringify(pacienteData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error('Intente de nuevo: ' + response.status + ' - ' + errorData.message);
      }
      const data = await response.json();
      set({ paciente: data });
    } catch (error) {
      alert(`Error al crear paciente: ${error}`);
    }
  },
}));
