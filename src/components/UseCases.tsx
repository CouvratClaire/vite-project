import { BlockContainer, Flex, Title } from "./ui/MainStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { VerticalCard } from "./ui/VerticalCard";
import { IconButton } from "./ui/IconButton";
import { ChevronRightIcon } from "./svg/ChevronRightIcon";
import styled from "@emotion/styled";
import { ChevronLeftIcon } from "./svg/ChevronLeftIcon";
import { Button } from "./ui/Button";
import { useMediaQuery } from "react-responsive";
import { VerticalCardEnum } from "./ui/VerticalCard.types";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1380 },
    items: 5,
  },
  small_desktop: {
    breakpoint: { max: 1380, min: 1024 },
    items: 4,
  },
  tablet_fullSize: {
    breakpoint: { max: 1170, min: 950 },
    items: 3,
  },
  tablet_fullSize_button: {
    breakpoint: { max: 950, min: 850 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 850, min: 800 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  small_tablet: {
    breakpoint: { max: 800, min: 530 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const RightArrow = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -80px;
`;

const LeftArrow = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -80px;
`;

const ButtonGroup = ({
  next,
  previous,
  ...rest
}: {
  next: () => void;
  previous: () => void;
  carouselState: { currentSlide: number; totalItems: number };
}) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;

  // onMove means if dragging or swiping in progress.
  return (
    <>
      {currentSlide > 0 ? (
        <LeftArrow onClick={() => previous()}>
          <ChevronLeftIcon />
        </LeftArrow>
      ) : null}

      {currentSlide < totalItems ? (
        <RightArrow onClick={() => next()}>
          <ChevronRightIcon />
        </RightArrow>
      ) : null}
    </>
  );
};

export const UseCases = () => {
  const showArrow = useMediaQuery({
    query: "(min-width: 850px)",
  });
  return (
    <BlockContainer>
      <Title>Using Mistral AI</Title>
      <div style={{ position: "relative" }}>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
          partialVisible
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          customButtonGroup={showArrow ? <ButtonGroup /> : null}
          renderButtonGroupOutside={true}
        >
          <VerticalCard
            variant={VerticalCardEnum.SECONDARY}
            title={"Insurance"}
            subtitle={"Revolutionize insurance with AI"}
            onClick={() => null}
          />
          <VerticalCard
            variant={VerticalCardEnum.TERTIARY}
            title={"Banking"}
            subtitle={"Improve fraud detection"}
            onClick={() => null}
          />
          <VerticalCard
            variant={VerticalCardEnum.PRIMARY}
            title={"Customer service"}
            subtitle={"Elevate customer support"}
            onClick={() => null}
          />
          <VerticalCard
            variant={VerticalCardEnum.SECONDARY}
            title={"E-commerce"}
            subtitle={"Enhance e-commerce personalization"}
            onClick={() => null}
          />
          <VerticalCard
            variant={VerticalCardEnum.TERTIARY}
            title={"Legal documents"}
            subtitle={"Transform legal document automation"}
            onClick={() => null}
          />
          <VerticalCard
            variant={VerticalCardEnum.SECONDARY}
            title={"Marketplace"}
            subtitle={"Transform catalog management"}
            onClick={() => null}
          />
        </Carousel>
      </div>
      <Flex justifyContent="flex-end">
        <Button text="Contact our team" onClick={() => null} />
      </Flex>
    </BlockContainer>
  );
};
