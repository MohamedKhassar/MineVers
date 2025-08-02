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
  title: string;
  description: string;
}
