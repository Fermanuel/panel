import { create } from 'zustand';

interface ModalBorrarStore {
    isModalBorrarOpen: boolean;
    selectedPatient: any;
    patientid: any;
    openModalBorrar: (patientData: any, pacienteid: any) => void;
    closeModalBorrar: () => void;
    clearSelectedPatient: () => void;
}

export const useModalBorrar = create<ModalBorrarStore>((set) => ({
    isModalBorrarOpen: false,
    selectedPatient: '',
    patientid: '',
    openModalBorrar: (patientData: any, pacienteid: any) => set({ isModalBorrarOpen: true, selectedPatient: patientData, patientid: pacienteid}),
    closeModalBorrar: () => set({ isModalBorrarOpen: false }),
    clearSelectedPatient: () => set({ selectedPatient: null })
}));
