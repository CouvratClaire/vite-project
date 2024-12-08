import {
  FooterBlock,
  FooterGrid,
  FooterIcon,
  FooterLegalNotice,
  FooterSubTitle,
} from "./Footer.styles";
import { Link } from "./ui/Link";

export const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterGrid>
          <FooterIcon src="/images/logo.png" />
          <div>
            <FooterSubTitle>LINKS</FooterSubTitle>
            <Link label="Technology" href="#" />
            <Link label="Business" href="#" />
            <Link label="Developers Docs" href="#" />
            <Link label="About us" href="#" />
            <Link label="News" href="#" />
          </div>
          <div>
            <FooterSubTitle>ABOUT</FooterSubTitle>
            <Link label="Contact us" href="#" />
            <Link label="Careers" href="#" />
            <Link label="Terms of Use" href="#" />
            <Link label="Privacy Policy" href="#" />
            <Link label="Data processing Agreement" href="#" />
          </div>
        </FooterGrid>
      </FooterBlock>
      <FooterLegalNotice>
        © 2024 Mistral AI, All rights reserved - Legal notice
      </FooterLegalNotice>
    </>
  );
};
