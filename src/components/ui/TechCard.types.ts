import { ReactNode } from "react";
import { ButtonProps } from "./Button.types";

export type TechCardProps = {
  title: string;
  icon?: ReactNode;
  description: string;
  variant?: TechCardVariantEnum;
  buttonProps?: ButtonProps;
};

export enum TechCardVariantEnum {
  DEFAULT = "default",
  SIMPLE = "simple",
  WITH_ACTIONS = "withActions",
}
