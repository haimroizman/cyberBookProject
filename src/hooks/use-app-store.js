import create from 'zustand';

const useAppStore = create((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

export default useAppStore;
