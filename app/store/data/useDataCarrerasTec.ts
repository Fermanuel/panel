import {create} from 'zustand';

interface Carrera {
  id: number;
  nombre: string;
  nomenclatura: string;
}

interface DataStore {
  data: Carrera[];
  fetchData: () => Promise<void>;
}

export const useDataCarrerasTec = create<DataStore>((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/carreras-tec`, {
        method: 'GET', // o 'POST'
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer tu_token' // si necesitas autenticación
        },
        // body: JSON.stringify(data) // incluye esto si estás haciendo un POST con datos
      });
      if (!response.ok) {
        throw new Error('Hubo un problema al hacer la solicitud: ' + response.status);
      }
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));
