export enum ButtonVariantEnum {
  DEFAULT = "default",
  LIGHT = "light",
}

export type ButtonProps = {
  variant?: ButtonVariantEnum;
  text: string;
  onClick: () => void;
};
