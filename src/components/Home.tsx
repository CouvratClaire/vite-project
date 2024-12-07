import styled from "@emotion/styled";
import { Button, ButtonProps } from "./ui/Button";
import { Flex } from "./ui/MainStyle";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import { css } from "@emotion/react";

const HomeContainer = styled("div")`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-image: url(/images/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #f5f5f5;
`;

const InnerContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFull",
})(
  ({ isFull }: { isFull: boolean }) => css`
    padding: ${isFull ? "10% 0" : "10% 15%"};
    display: flex;
    flex-direction: column;
    gap: 10vh;
  `
);

const TitleContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFull",
})(
  ({ isFull }: { isFull: boolean }) => css`
    display: flex;
    flex-direction: column;
    width: "fit-content";
    border-radius: 10px;
    padding: 10px;
    gap: 25px;
    font-size: 20px;
    background: rgba(0, 0, 0, 0.5);

    ${isFull
      ? css`
          align-items: center;
        `
      : ""}
  `
);

const Title = styled("h1")`
  max-width: 30vh;
  font-size: 52px;
  font-weight: bold;
  flex-direction: column;
  margin: 0;
`;

const Orange = styled("span")`
  color: #e08a00;
`;

const CardContainer = styled("div")`
  background: white;
  border-radius: 10px;
  color: #14213e;
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

const Card = ({
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

const responsive = {
  full: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  double_items: {
    breakpoint: { max: 1200, min: 860 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  double_item_second: {
    breakpoint: { max: 860, min: 670 },
    items: 2,
    partialVisibilityGutter: 10,
  },

  single_item: {
    breakpoint: { max: 670, min: 450 },
    items: 1,
    partialVisibilityGutter: 50,
  },

  // single_item_second: {
  //   breakpoint: { max: 800, min: 450 },
  //   items: 1,
  //   partialVisibilityGutter: 10,
  // },
};

export const Home = () => {
  const isCarousel = useMediaQuery({
    query: "(min-width: 450px)",
  });
  return (
    <HomeContainer>
      <InnerContainer isFull={!isCarousel}>
        <TitleContainer isFull={!isCarousel}>
          <Title>
            Frontier AI in <Orange>your hands</Orange>
          </Title>
          <div>Open and portable generative AI for devs and businesses.</div>
        </TitleContainer>
        {isCarousel ? (
          <Carousel
            responsive={responsive}
            arrows={false}
            partialVisible
            // customButtonGroup={<ButtonGroup />}
            // renderButtonGroupOutside={true}
          >
            <Card
              text="Try our chat"
              buttonProps={{ text: "Le chat", onClick: () => null }}
              imageUrl="/images/Animal.svg"
            />
            <Card
              text="Access our platform"
              buttonProps={{ text: "La plateforme", onClick: () => null }}
              imageUrl="/images/Downloading.svg"
            />
            <Card
              text="Work with us"
              buttonProps={{ text: "Contact sales", onClick: () => null }}
              imageUrl="/images/Finances.svg"
            />
          </Carousel>
        ) : (
          <Flex direction="column" gap="30px" padding="0 10%">
            <Button text="Le chat" onClick={() => null} />
            <Button text="La plateforme" onClick={() => null} />
            <Button text="Contact sales" onClick={() => null} />
          </Flex>
        )}
      </InnerContainer>
    </HomeContainer>
  );
};
