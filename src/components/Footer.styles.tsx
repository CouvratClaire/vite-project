import styled from "@emotion/styled";
import { BlockContainer } from "./ui/MainStyle";

export const FooterBlock = styled(BlockContainer)`
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.light};
  position: relative;
  padding-bottom: 70px;
  padding-top: 40px;
`;

export const FooterGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 530px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 20px;
`;

export const FooterSubTitle = styled("p")`
  margin-left: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const FooterLegalNotice = styled("div")`
  border-top: 1px solid white;
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const FooterIcon = styled("img")`
  margin-top: 50px;
  width: 150px;
  height: 50px;
`;
