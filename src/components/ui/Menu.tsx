import { ReactNode, useState } from "react";
import { Link } from "./Link";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { css } from "@emotion/react";
import { Theme } from "@emotion/react";

type MenuProps = {
  label?: string;
  icon?: ReactNode;
  href: string;
  menuItems: {
    label: string;
    href: string;
    key: string;
  }[];
};

const MenuContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSmallDropdown",
})(
  ({
    isSmallDropdown,
    theme,
  }: {
    isSmallDropdown: boolean;
    theme?: Theme;
  }) => css`
    margin-top: 15px;
    position: absolute;
    top: 20px;
    right: ${!isSmallDropdown ? 0 : undefined};
    padding: 12px;
    width: max-content;
    background: ${theme?.colors.background.dark};
    color: white;

    ${!isSmallDropdown
      ? css`
          font-size: 30px !important;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 25px;
          /* width: 100vh; */
        `
      : ""}
  `
);

const IconMenu = styled("div")`
  padding: 12px;
`;

export const Menu = ({ label, href, menuItems, icon }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInMenu, setIsInMenu] = useState(false);
  const isSmallDropdown = useMediaQuery({
    query: "(min-width: 750px)",
  });
  return (
    <div style={{ position: "relative" }}>
      {label ? (
        <div
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            if (!isInMenu) {
              setIsOpen(false);
            }
          }}
        >
          <Link label={label} href={href} isMenu isActive={isOpen} />
        </div>
      ) : (
        <IconMenu
          onClick={() => {
            setIsOpen((formerOpen) => !formerOpen);
          }}
        >
          {icon}
        </IconMenu>
      )}
      {isOpen ? (
        <MenuContainer
          onMouseOver={() => {
            if (label && !isInMenu) {
              setIsInMenu(true);
            }
          }}
          onMouseLeave={() => {
            setIsInMenu(false);
            setIsOpen(false);
          }}
          isSmallDropdown={isSmallDropdown}
        >
          {menuItems.map((item) => (
            <Link {...item} isBig={!label} />
          ))}
        </MenuContainer>
      ) : null}
    </div>
  );
};
