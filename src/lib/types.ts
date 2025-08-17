import type { HTMLAttributes, ReactNode } from "react";
import type { IconType } from "react-icons";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: ReactNode;
}

export interface FeatureItem {
  Icon: IconType;
  title: string;
  description: string;
  delay?: number;
}

export interface SectionHeaderProps {
  title?: string;
  description: string;
  white?:string
  color?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

