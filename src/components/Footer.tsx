import styled from "@emotion/styled";
import { BlockContainer } from "./ui/MainStyle";
import { Link } from "./ui/Link";

const Block = styled(BlockContainer)`
  background: #3d3d3d;
  color: #f5f5f5;
  position: relative;
  padding-bottom: 70px;
  padding-top: 40px;
`;

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 530px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 20px;
`;

const SubTitle = styled("p")`
  margin-left: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const LegalNotice = styled("div")`
  border-top: 1px solid white;
  background: #3d3d3d;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Icon = styled("img")`
  margin-top: 50px;
  width: 150px;
  height: 50px;
`;

export const Footer = () => {
  return (
    <>
      <Block>
        <Grid>
          <Icon src="/images/logo.png" />
          <div>
            <SubTitle>LINKS</SubTitle>
            <Link label="Technology" href="#" />
            <Link label="Business" href="#" />
            <Link label="Developers Docs" href="#" />
            <Link label="About us" href="#" />
            <Link label="News" href="#" />
          </div>
          <div>
            <SubTitle>ABOUT</SubTitle>
            <Link label="Contact us" href="#" />
            <Link label="Careers" href="#" />
            <Link label="Terms of Use" href="#" />
            <Link label="Privacy Policy" href="#" />
            <Link label="Data processing Agreement" href="#" />
          </div>
        </Grid>
      </Block>
      <LegalNotice>
        © 2024 Mistral AI, All rights reserved - Legal notice
      </LegalNotice>
    </>
  );
};
