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
        avatar: null,
        wantedCount: null,
        visitedCount: null,
        createdAt: null,
        updatedAt: null,
      },
      setLogin: () =>
        set(() => ({
          isAuthenticated: true,
        })),
      setLogout: () =>
        set(() => ({
          isAuthenticated: false,
          tokens: {
            accessToken: null,
            refreshToken: null,
          },
        })),
      setTokens: (accessToken, refreshToken) =>
        set(() => ({
          tokens: { accessToken, refreshToken },
        })),
      setUser: (id, phone, username, avatar, wantedCount, visitedCount, createdAt, updatedAt) =>
        set(() => ({
          user: {
            id,
            phone,
            username,
            avatar,
            wantedCount,
            visitedCount,
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

export function getAccessToken() {
  return authStore.getState().tokens.accessToken;
}
