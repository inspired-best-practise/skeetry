import create from 'zustand';

export const profileStore = create((set, get) => ({
  selected: 'want',
  setSelected: selected => {
    return set(() => ({
      selected: selected,
    }));
  },
}));
