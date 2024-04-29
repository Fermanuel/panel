import { create } from 'zustand';

interface ModalBorrarStore {
    isModalBorrarOpen: boolean;
    selectedPatient: any;
    openModalBorrar: (patientData: any) => void;
    closeModalBorrar: () => void;
    clearSelectedPatient: () => void;
}

export const useModalBorrar = create<ModalBorrarStore>((set) => ({
    isModalBorrarOpen: false,
    selectedPatient: '',
    openModalBorrar: (patientData: any) => set({ isModalBorrarOpen: true, selectedPatient: patientData }),
    closeModalBorrar: () => set({ isModalBorrarOpen: false }),
    clearSelectedPatient: () => set({ selectedPatient: null })
}));
