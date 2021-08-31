import create from 'zustand';

export const authStore = create(set => ({
  logined: false,
  setLogin: () => set({ logined: true }),
  setLogout: () => set({ logined: false }),
}));
