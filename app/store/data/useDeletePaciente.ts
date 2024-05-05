import {create} from 'zustand';

interface Paciente {
  id: string;
  // Agrega aquí más campos según los datos del paciente
}

interface PacienteStore {
  paciente: Paciente | null;
  deletePaciente: (id: string) => Promise<void>;
}

export const useDeletePacienteStore = create<PacienteStore>((set) => ({
  paciente: null,
  deletePaciente: async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/api/pacientes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer tu_token' // si necesitas autenticación
        },
      });
      if (!response.ok) {
        throw new Error('Hubo un problema al hacer la solicitud: ' + response.status);
      }
      // Puedes manejar la respuesta de la API aquí si es necesario
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));
