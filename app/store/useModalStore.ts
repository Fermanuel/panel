import { create } from 'zustand';

interface ModalStore {
    isModalOpen: boolean;
    selectedPatient: any;
    openModal: (patientData: string) => void;
    closeModal: () => void;
    clearSelectedPatient: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    selectedPatient: null,
    openModal: (patientData: string) => set({ isModalOpen: true, selectedPatient: patientData }),
    closeModal: () => set({ isModalOpen: false }),
    clearSelectedPatient: () => set({ selectedPatient: null }),
}));
