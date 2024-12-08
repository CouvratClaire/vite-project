import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";
import { Flex } from "./MainStyle";
import { Button } from "./Button";

const CardContainer = styled("div")`
  background: white;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 35px;
  width: 80%;
  @media (min-width: 670px) {
    width: 20vh;
  }
  @media (min-width: 800px) {
    width: 25vh;
  }

  height: 190px;
`;

export const HomeCard = ({
  text,
  buttonProps,
  imageUrl,
}: {
  text: string;
  buttonProps: ButtonProps;
  imageUrl: string;
}) => {
  return (
    <CardContainer>
      <Flex direction="column" gap="30px">
        {text}
        <Button {...buttonProps} />
      </Flex>
      <Flex justifyContent="flex-end" width="100%">
        <img src={imageUrl} />
      </Flex>
    </CardContainer>
  );
};
