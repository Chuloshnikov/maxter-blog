"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type InViewContextType = {
  inView: boolean;
  setInView: (inView: boolean) => void;
};

const InViewContext = createContext<InViewContextType | undefined>(undefined);

export const InViewProvider = ({ children }: { children: ReactNode }) => {
  const [inView, setInView] = useState(false);
  return (
    <InViewContext.Provider value={{ inView, setInView }}>
      {children}
    </InViewContext.Provider>
  );
};

export const useInViewContext = () => {
  const context = useContext(InViewContext);
  if (!context) {
    throw new Error("useInViewContext must be used within an InViewProvider");
  }
  return context;
};
