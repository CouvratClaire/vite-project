import { ReactNode } from "react";

export enum IconButtonVariantEnum {
  DEFAULT = "default",
  BIG = "big",
  SIMPLE = "simple",
}

export type IconButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: IconButtonVariantEnum;
  onClick: () => void;
};
