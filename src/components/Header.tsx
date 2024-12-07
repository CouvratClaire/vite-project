import styled from "@emotion/styled";
import { Menu } from "./ui/Menu";
import { Link } from "./ui/Link";
import { useMediaQuery } from "react-responsive";
import { MenuIcon } from "./svg/MenuIcon";

const HeaderContainer = styled("div")`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 10;
  background: #3d3d3d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 60px;
`;

export const Header = () => {
  const isFullMenu = useMediaQuery({
    query: "(min-width: 750px)",
  });
  return (
    <HeaderContainer>
      <img src="/images/logo.png" />
      {isFullMenu ? (
        <MenuContainer>
          <Menu
            label="Technology"
            href="#"
            menuItems={[
              {
                label: "Models",
                key: "models",
                href: "#",
              },
              {
                label: "Customization",
                key: "custom",
                href: "#",
              },
              {
                label: "Prices",
                key: "prices",
                href: "#",
              },
              {
                label: "Deployment",
                key: "deploy",
                href: "#",
              },
              {
                label: "La Plateforme",
                key: "platform",
                href: "#",
              },
              {
                label: "Licenses",
                key: "licenses",
                href: "#",
              },
            ]}
          />
          <Menu
            label="Business"
            href="#"
            menuItems={[
              {
                label: "Use cases",
                key: "cases",
                href: "#",
              },
              {
                label: "Customer stories",
                key: "stories",
                href: "#",
              },
              {
                label: "For startups",
                key: "startups",
                href: "#",
              },
            ]}
          />
          <Link label="Developpers Docs" href="#" />
          <Menu
            label="About us"
            href="#"
            menuItems={[
              {
                label: "Mission",
                key: "mission",
                href: "#",
              },
              {
                label: "Careers",
                key: "careers",
                href: "#",
              },
            ]}
          />
          <Link label="News" href="#" />
        </MenuContainer>
      ) : (
        <MenuContainer>
          <Menu
            icon={<MenuIcon />}
            href=""
            menuItems={[
              {
                label: "Technology",
                key: "technology",
                href: "#",
              },
              {
                label: "Business",
                key: "business",
                href: "#",
              },
              {
                label: "Developers Docs",
                key: "docs",
                href: "#",
              },
              {
                label: "About us",
                key: "aboutUs",
                href: "#",
              },
              {
                label: "News",
                key: "news",
                href: "#",
              },
            ]}
          />
        </MenuContainer>
      )}
    </HeaderContainer>
  );
};
