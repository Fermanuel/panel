import { create } from 'zustand';

interface ModalStore {
    isModalOpen: boolean;
    selectedPatient: any;
    PatientId: string;
    openModal: (patientData: any, id: string) => void;
    closeModal: () => void;
    clearSelectedPatient: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    selectedPatient: null,
    PatientId: '',
    openModal: (patientData: string, id: string) => set({ isModalOpen: true, selectedPatient: patientData, PatientId: id}),
    closeModal: () => set({ isModalOpen: false }),
    clearSelectedPatient: () => set({ selectedPatient: null }),
}));
