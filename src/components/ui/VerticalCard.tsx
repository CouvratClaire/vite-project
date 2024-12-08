import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconButton } from "./IconButton";
import { ArrowRightIcon } from "../svg/ArrowRightIcon";
import { Theme } from "@emotion/react";
import { VerticalCardEnum, VerticalCardProps } from "./VerticalCard.types";
import { IconButtonVariantEnum } from "./IconButton.types";

const CardContainer = styled("div")(
  ({ variant, theme }: { variant: VerticalCardEnum; theme?: Theme }) => css`
    border-radius: 10px;
    height: 250px;
    max-width: 150px;
    background: ${variant === VerticalCardEnum.PRIMARY
      ? "#FFC870"
      : variant === VerticalCardEnum.SECONDARY
      ? theme?.colors.background.primary
      : theme?.colors.background.very_light};
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 20px;
    font-weight: bold;
  `
);

const BottomContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  font-weight: 300;
`;

const ActionContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const VerticalCard = ({
  variant,
  title,
  subtitle,
  onClick,
}: VerticalCardProps) => {
  return (
    <CardContainer variant={variant}>
      {title}
      <BottomContainer>
        {subtitle}
        <ActionContainer>
          <IconButton variant={IconButtonVariantEnum.SIMPLE} onClick={onClick}>
            <ArrowRightIcon />
          </IconButton>
        </ActionContainer>
      </BottomContainer>
    </CardContainer>
  );
};
