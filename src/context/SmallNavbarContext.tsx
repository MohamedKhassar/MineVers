import { createContext } from "react";

interface SmallNavbarContextProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const SmallNavbarContext = createContext<SmallNavbarContextProps | undefined>(undefined);

