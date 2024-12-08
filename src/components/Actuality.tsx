import styled from "@emotion/styled";
import { BlockContainer, Flex } from "./ui/MainStyle";
import { Button } from "./ui/Button";
import { useMediaQuery } from "react-responsive";
import { ButtonVariantEnum } from "./ui/Button.types";

const ActualityCard = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 850px) {
    max-width: 85%;
  }
`;

const Title = styled(Flex)`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 32px;
  font-weight: bold;
`;

export const Actuality = () => {
  const isBig = useMediaQuery({
    query: "(min-width: 750px)",
  });
  return (
    <BlockContainer>
      <ActualityCard>
        <div style={{ fontSize: "20px" }}>Actuality</div>
        <Title
          justifyContent="space-between"
          direction={isBig ? "flex" : "column"}
          gap={!isBig ? "15px" : "0"}
        >
          Mistral has entered the chat
          <Button
            text="Read more"
            variant={ButtonVariantEnum.LIGHT}
            onClick={() => null}
          />
        </Title>
        <div style={{ fontSize: "16px", fontWeight: 300 }}>18 Nov 2024</div>
      </ActualityCard>
    </BlockContainer>
  );
};
