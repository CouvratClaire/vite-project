import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = styled("div")(
  ({
    direction = "row",
    gap = "0",
    alignItems,
    justifyContent,
    width,
    padding,
  }: {
    direction?: string;
    gap?: string;
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    padding?: string;
  }) => css`
    display: flex;
    gap: ${gap};
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent ?? "start"};
    width: ${width};
    padding: ${padding};
  `
);

export const Title = styled("h2")(
  ({ color }: { color?: string }) => css`
    font-size: 32px;
    font-weight: bold;
    color: ${color ?? "#14213E"};
  `
);

export const BlockContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 10%;
  padding-right: 10%;

  @media (min-width: 850px) {
    padding-left: 15vh;
    padding-right: 15vh;
  }
`;
