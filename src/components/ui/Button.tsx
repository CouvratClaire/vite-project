import { css } from "@emotion/react";
import styled from "@emotion/styled";

export enum ButtonVariantEnum {
  DEFAULT = "default",
  LIGHT = "light",
}

export type ButtonProps = {
  variant?: ButtonVariantEnum;
  text: string;
  onClick: () => void;
};

const ButtonContainer = styled("button")(
  ({ variant }: { variant: ButtonVariantEnum }) => css`
    padding: 10px 28px;
    border-radius: 40px;
    border: none;
    background: ${variant === ButtonVariantEnum.LIGHT ? "#FFF7EB" : "#E08A00"};
    transition: background-color 0.3s ease-out;
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;
    color: ${variant === ButtonVariantEnum.LIGHT ? "#14213E" : "#F5F5F5"};

    &:hover {
      background: ${variant === ButtonVariantEnum.LIGHT
        ? "#FFE8C2"
        : "#A36500"};
    }

    &:active {
      background: ${variant === ButtonVariantEnum.LIGHT
        ? "#FFD899"
        : "#663F00"};
    }
  `
);

export const Button = ({
  variant = ButtonVariantEnum.DEFAULT,
  text,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};
