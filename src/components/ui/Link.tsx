import styled from "@emotion/styled";
import { ChevronDownIcon } from "../svg/ChevronDownIcon";
import { css } from "@emotion/react";

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
  ({ isActive, isBig }: { isActive?: boolean; isBig?: boolean }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none; /* no underline */
    color: ${isActive ? "#e08a00" : "white"};
    font-size: ${isBig ? "30px" : "16px"};
    padding: 8px 12px;

    transition: color 0.3s ease-out;

    &:hover {
      color: #e08a00;
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
