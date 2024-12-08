import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps, ButtonVariantEnum } from "./Button.types";

const ButtonContainer = styled("button")(
  ({ variant, theme }: { variant: ButtonVariantEnum; theme?: Theme }) => css`
    padding: 10px 28px;
    border-radius: 40px;
    border: none;
    background: ${variant === ButtonVariantEnum.LIGHT
      ? "#FFF7EB"
      : theme?.colors.primary};
    transition: background-color 0.3s ease-out;
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;
    color: ${variant === ButtonVariantEnum.LIGHT
      ? theme?.colors.text.primary
      : theme?.colors.text.light};

    &:hover {
      background: ${variant === ButtonVariantEnum.LIGHT
        ? theme?.colors.background.very_light
        : "#A36500"};
    }

    &:active {
      background: ${variant === ButtonVariantEnum.LIGHT
        ? theme?.colors.background.primary
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
