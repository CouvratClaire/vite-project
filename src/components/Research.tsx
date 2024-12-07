import styled from "@emotion/styled";
import { BlockContainer, Title } from "./ui/MainStyle";
import { useMediaQuery } from "react-responsive";

const Block = styled(BlockContainer)`
  background: #3d3d3d;
  color: #f5f5f5;
  position: relative;
  /* gap: 0; */
  padding-bottom: 70px;
  padding-top: 40px;
`;

const Img = styled("img")`
  position: absolute;
  bottom: -5px;
  right: 0;
`;

export const Research = () => {
  const showImage = useMediaQuery({
    query: "(min-width: 850px)",
  });
  return (
    <Block>
      <Title color="white">Research with open-weight models</Title>
      We release open-weight models for everyone to customize and deploy where
      they want it. Our super-efficient model Mistral Nemo is available under
      Apache 2.0, while Mistral Large 2 is available through both a free
      non-commercial license, and a commercial license. <br />
      - Download them for deployment in your own environment <br />- Use them on
      La Plateforme at market-leading availability, speed, and quality control
      {showImage ? <Img src="/images/Delete Confirmation.svg" /> : null}
    </Block>
  );
};
