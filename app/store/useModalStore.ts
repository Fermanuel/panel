import { create } from 'zustand';

interface ModalStore {
    isModalOpen: boolean;
    selectedPatient: any;
    openModal: (patientData: any) => void;
    closeModal: () => void;
    clearSelectedPatient: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    selectedPatient: '',
    openModal: (patientData: any) => set({ isModalOpen: true, selectedPatient: patientData }),
    closeModal: () => set({ isModalOpen: false }),
    clearSelectedPatient: () => set({ selectedPatient: null }),
}));
