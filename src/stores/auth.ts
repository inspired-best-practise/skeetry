import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
      user: {
        id: null,
        phone: null,
        username: null,
        createdAt: null,
        updatedAt: null,
      },
      toggleIsAuthenticated: () =>
        set(() => ({
          isAuthenticated: !get().isAuthenticated,
        })),
      setTokens: (accessToken, refreshToken) =>
        set(() => ({
          tokens: { accessToken, refreshToken },
        })),
      setUser: (id, phone, username, createdAt, updatedAt) =>
        set(() => ({
          user: {
            id,
            phone,
            username,
            createdAt,
            updatedAt,
          },
        })),
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
