import { create } from "zustand";

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
    // datos del paciente para editar
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
    updatePaciente: (id: string, data: Partial<Paciente>) => Promise<void>;
}

export const useUpdatePacienteStore = create<PacienteStore>((set) => ({
    paciente: null,
    updatePaciente: async (id, data) => {
        try {
            const response = await fetch(`http://localhost:3002/api/pacientes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Hubo un problema al hacer la solicitud: " + response.status);
            }
            // Puedes manejar la respuesta de la API aquí si es necesario
        } catch (error) {
            console.error("Error:", error);
        }
    },
}));