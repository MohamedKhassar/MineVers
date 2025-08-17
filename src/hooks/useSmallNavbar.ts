import { useContext } from "react";
import { SmallNavbarContext } from "../context/SmallNavbarContext";

export const useSmallNavbar = () => {
  const context = useContext(SmallNavbarContext);
  if (!context) throw new Error("useSmallNavbar must be used within SmallNavbarProvider");
  return context;
};
