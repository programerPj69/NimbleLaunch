import { createContext, useContext } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
  user: any | null;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};