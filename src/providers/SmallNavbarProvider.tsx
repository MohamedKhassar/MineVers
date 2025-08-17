import { useState, type ReactNode } from "react";
import { SmallNavbarContext } from "../context/SmallNavbarContext";

interface ProviderProps {
  children: ReactNode;
}

export const SmallNavbarProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <SmallNavbarContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </SmallNavbarContext.Provider>
  );
};