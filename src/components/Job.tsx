import styled from "@emotion/styled";
import { BlockContainer, Flex, Title } from "./ui/MainStyle";
import { Button } from "./ui/Button";
import { useMediaQuery } from "react-responsive";
import { css } from "@emotion/react";

const Block = styled(BlockContainer)`
  background: ${({ theme }) => theme.colors.background.light};
  /* gap: 0; */
  padding-bottom: 70px;
  padding-top: 40px;
`;

const ImageBlock = styled("div")(
  ({ isFull }: { isFull: boolean }) => css`
    min-width: ${!isFull ? "40%" : "100%"};
    min-height: 20vh;
    background-image: url(/images/team.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  `
);

export const Job = () => {
  const isFlex = useMediaQuery({
    query: "(min-width: 850px)",
  });
  return (
    <Block>
      <Flex
        gap="30px"
        alignItems="center"
        direction={isFlex ? "row" : "column"}
      >
        <ImageBlock isFull={!isFlex} />
        <Flex direction="column" gap="15px">
          <Title>Work at Mistral AI</Title>
          We’re a small, creative team with high scientific standards. We make
          compute efficient, useful and powerful AI models with both a strong
          research focus and a fast-paced entrepreneurial mindset.
          <Flex justifyContent="flex-end">
            <Button text="Join us" onClick={() => null} />
          </Flex>
        </Flex>
      </Flex>
    </Block>
  );
};
