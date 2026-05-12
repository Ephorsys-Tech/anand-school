'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthUser, LoginCredentials } from '@/types';
import api, { tokenStorage } from '@/lib/api';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = () => {
      const tokens = tokenStorage.getTokens();
      if (tokens) {
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser && storedUser !== 'undefined') {
          try {
            setUser(JSON.parse(storedUser));
          } catch (e) {
            console.error('Failed to parse auth_user', e);
            localStorage.removeItem('auth_user');
          }
        }
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { data } = await api.post('/api/auth/login', credentials);
    tokenStorage.setTokens({
       accessToken: data.accessToken,
       refreshToken: data.refreshToken
    });
    
    const userData = data.admin || data.user;
    setUser(userData);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    router.push('/dashboard');
  };

  const logout = () => {
    tokenStorage.clearTokens();
    localStorage.removeItem('auth_user');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
