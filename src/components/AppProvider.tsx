'use client';
import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}