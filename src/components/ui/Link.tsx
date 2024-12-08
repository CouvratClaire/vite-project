import styled from "@emotion/styled";
import { ChevronDownIcon } from "../svg/ChevronDownIcon";
import { css } from "@emotion/react";
import { Theme } from "@emotion/react";

type LinkProps = {
  label: string;
  href: string;
  isActive?: boolean;
  isMenu?: boolean;
  isBig?: boolean;
};

const LinkContainer = styled("a", {
  shouldForwardProp: (prop) => prop !== "isActive",
})(
  ({
    theme,
    isActive,
    isBig,
  }: {
    theme?: Theme;
    isActive?: boolean;
    isBig?: boolean;
  }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none; /* no underline */
    color: ${isActive ? theme?.colors.primary : "white"};
    font-size: ${isBig ? "30px" : "16px"};
    padding: 8px 12px;

    transition: color 0.3s ease-out;

    &:hover {
      color: ${theme?.colors.primary};
    }
  `
);

export const Link = ({ label, href, isMenu, isActive, isBig }: LinkProps) => {
  return (
    <LinkContainer href={href} isActive={isActive} isBig={isBig}>
      {label}
      {isMenu ? <ChevronDownIcon /> : null}
    </LinkContainer>
  );
};
