import { Button } from "./ui/Button";
import { Flex } from "./ui/MainStyle";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import { HomeCard } from "./ui/HomeCard";
import {
  HomeContainer,
  HomeInnerContainer,
  HomeTitle,
  HomeTitleContainer,
  OrangeText,
} from "./Home.styles";

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
};

export const Home = () => {
  const isCarousel = useMediaQuery({
    query: "(min-width: 450px)",
  });
  return (
    <HomeContainer>
      <HomeInnerContainer isFull={!isCarousel}>
        <HomeTitleContainer isFull={!isCarousel}>
          <HomeTitle>
            Frontier AI in <OrangeText>your hands</OrangeText>
          </HomeTitle>
          <div>Open and portable generative AI for devs and businesses.</div>
        </HomeTitleContainer>
        {isCarousel ? (
          <Carousel
            responsive={responsive}
            arrows={false}
            partialVisible
            // customButtonGroup={<ButtonGroup />}
            // renderButtonGroupOutside={true}
          >
            <HomeCard
              text="Try our chat"
              buttonProps={{ text: "Le chat", onClick: () => null }}
              imageUrl="/images/Animal.svg"
            />
            <HomeCard
              text="Access our platform"
              buttonProps={{ text: "La plateforme", onClick: () => null }}
              imageUrl="/images/Downloading.svg"
            />
            <HomeCard
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
      </HomeInnerContainer>
    </HomeContainer>
  );
};
