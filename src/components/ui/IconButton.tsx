import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { IconButtonProps, IconButtonVariantEnum } from "./IconButton.types";

const IconButtonContainer = styled("button")(
  ({
    variant,
    theme,
  }: {
    variant: IconButtonVariantEnum;
    theme?: Theme;
  }) => css`
    border-radius: 50px;
    padding: ${variant === IconButtonVariantEnum.BIG ? "10px" : "2px"};
    border: ${variant === IconButtonVariantEnum.DEFAULT
      ? `1px solid ${theme?.colors.text.primary}`
      : "none"};
    color: ${variant === IconButtonVariantEnum.BIG
      ? theme?.colors.text.light
      : theme?.colors.text.primary};
    background: ${variant === IconButtonVariantEnum.BIG
      ? theme?.colors.primary
      : "none"};
    transition: all 0.3s ease-out;
    cursor: pointer;

    box-shadow: ${variant === IconButtonVariantEnum.BIG
      ? "0px 4px 4px #b9b9b9"
      : "none"};

    &:hover {
      color: ${variant === IconButtonVariantEnum.SIMPLE
        ? "#663F00"
        : theme?.colors.text.primary};
      background: ${variant === IconButtonVariantEnum.BIG
        ? theme?.colors.background.primary
        : variant === IconButtonVariantEnum.DEFAULT
        ? theme?.colors.background.very_light
        : "none"};
    }

    &:active {
      color: ${variant === IconButtonVariantEnum.SIMPLE
        ? "#A36500"
        : theme?.colors.text.primary};
      background: ${variant === IconButtonVariantEnum.BIG
        ? theme?.colors.background.very_light
        : variant === IconButtonVariantEnum.DEFAULT
        ? theme?.colors.background.primary
        : "none"};
    }
  `
);

export const IconButton = ({
  children,
  variant = IconButtonVariantEnum.DEFAULT,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <IconButtonContainer
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </IconButtonContainer>
  );
};
