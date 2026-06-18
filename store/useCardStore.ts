import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CardState {
  selectedCardIds: number[];
  addCard: (id: number) => void;
  removeCard: (id: number) => void;
  clearAll: () => void;
}

export const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      selectedCardIds: [],

      addCard: (id) => set((state) => {
        if (state.selectedCardIds.includes(id)) return state;
        if (state.selectedCardIds.length >= 3) {
          alert('Можно выбрать не более 3 карт для сравнения');
          return state;
        }
        return { selectedCardIds: [...state.selectedCardIds, id] };
      }),

      removeCard: (id) => set((state) => ({
        selectedCardIds: state.selectedCardIds.filter((cardId) => cardId !== id)
      })),

      clearAll: () => set({ selectedCardIds: [] }),
    }),
    {
      name: 'selected-cards-storage',
    }
  )
);