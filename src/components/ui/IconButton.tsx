import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export enum IconButtonVariantEnum {
  DEFAULT = "default",
  BIG = "big",
  SIMPLE = "simple",
}

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: IconButtonVariantEnum;
  onClick: () => void;
};

const IconButtonContainer = styled("button")(
  ({ variant }: { variant: IconButtonVariantEnum }) => css`
    border-radius: 50px;
    padding: 2px;
    border: ${variant === IconButtonVariantEnum.DEFAULT
      ? "1px solid #14213E"
      : "none"};
    color: ${variant === IconButtonVariantEnum.BIG ? "#F5F5F5" : "#14213E"};
    background: ${variant === IconButtonVariantEnum.BIG ? "#E08A00" : "none"};
    transition: all 0.3s ease-out;
    cursor: pointer;

    box-shadow: ${variant === IconButtonVariantEnum.BIG
      ? "0px 4px 4px #b9b9b9"
      : "none"};

    &:hover {
      color: ${variant === IconButtonVariantEnum.SIMPLE
        ? "#663F00"
        : "#14213E"};
      background: ${variant === IconButtonVariantEnum.BIG
        ? "#FFD899"
        : variant === IconButtonVariantEnum.DEFAULT
        ? "#FFE8C2"
        : "none"};
    }

    &:active {
      color: ${variant === IconButtonVariantEnum.SIMPLE
        ? "#A36500"
        : "#14213E"};
      background: ${variant === IconButtonVariantEnum.BIG
        ? "#FFE8C2"
        : variant === IconButtonVariantEnum.DEFAULT
        ? "#FFD899"
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
