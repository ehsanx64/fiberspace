import { create } from 'zustand';

interface ClickerStore {
    clicker: number;
    increase: () => void;
    decrease: () => void;
}

export const useClickerStore = create<ClickerStore>((set) => ({
    clicker: 0,
    increase: () => set((state) => ({ clicker: state.clicker + 1 })),
    decrease: () => set((state) => ({ clicker: state.clicker - 1 })),
}));