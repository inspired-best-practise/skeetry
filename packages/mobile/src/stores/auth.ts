import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create(
  persist(
    (set, get) => ({
      _hasHydrated: false,
      isAuthenticated: false,
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
      user: {
        id: null,
        phone: null,
        name: null,
        username: null,
        avatar: null,
        bio: null,
        rating: null,
        email: null,
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
      setUser: (
        id,
        phone,
        name,
        username,
        avatar,
        bio,
        rating,
        email,
        wantedCount,
        visitedCount,
        createdAt,
        updatedAt,
      ) =>
        set(() => ({
          user: {
            id,
            phone,
            name,
            username,
            avatar,
            bio,
            rating,
            email,
            wantedCount,
            visitedCount,
            createdAt,
            updatedAt,
          },
        })),
      unsetUser: () =>
        set(() => ({
          user: {
            id: null,
            phone: null,
            name: null,
            username: null,
            avatar: null,
            bio: null,
            rating: null,
            email: null,
            wantedCount: null,
            visitedCount: null,
            createdAt: null,
            updatedAt: null,
          },
        })),
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => () => {
        authStore.setState({ _hasHydrated: true });
      },
    },
  ),
);

export function getAccessToken() {
  return authStore.getState().tokens.accessToken;
}
