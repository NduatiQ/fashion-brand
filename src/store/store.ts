import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoginData {
  logName: string;
  logEmail: string;
  logPassword: string;
}

interface UserStore {
  loginData: LoginData | null;
  setLoginData: (data: LoginData) => void;
  clearLoginData: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      loginData: null,
      setLoginData: (data) => set({ loginData: data }),
      clearLoginData: () => set({ loginData: null }),
    }),
    {
      name: 'login-storage', // Key for localStorage
    }
  )
);