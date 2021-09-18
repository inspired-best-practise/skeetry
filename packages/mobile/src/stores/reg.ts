import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const regStore = create(
  persist(
    (set, get) => ({
      _hasHydrated: false,
      phone: null,
      code: null,
      setPhone: phone =>
        set(() => ({
          phone,
        })),
      setCode: code =>
        set(() => ({
          code,
        })),
    }),
    {
      name: 'reg-storage',
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => () => {
        regStore.setState({ _hasHydrated: true });
      },
    },
  ),
);
