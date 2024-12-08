import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HomeContainer = styled("div")`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-image: url(/images/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const HomeInnerContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFull",
})(
  ({ isFull }: { isFull: boolean }) => css`
    padding: ${isFull ? "10% 0" : "10% 15%"};
    display: flex;
    flex-direction: column;
    gap: 10vh;
  `
);

export const HomeTitleContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFull",
})(
  ({ isFull }: { isFull: boolean }) => css`
    display: flex;
    flex-direction: column;
    width: "fit-content";
    border-radius: 10px;
    padding: 25px;
    @media (min-width: 450px) {
      padding: 10px;
    }

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

export const HomeTitle = styled("h1")`
  font-size: 42px;
  @media (min-width: 450px) {
    max-width: 30vh;
    font-size: 52px;
  }
  font-weight: bold;
  flex-direction: column;
  margin: 0;
`;

export const OrangeText = styled("span")`
  color: ${({ theme }) => theme.colors.primary};
`;
