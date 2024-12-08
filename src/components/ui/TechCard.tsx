import { Button } from "./Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
import { TechCardProps, TechCardVariantEnum } from "./TechCard.types";

const CardContainer = styled("div")(
  ({ variant, theme }: { variant: TechCardVariantEnum; theme?: Theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme?.colors.text.primary};
    padding: 20px 25px;
    gap: 20px;
    border-radius: 10px;
    max-width: 500px;

    background: ${variant === TechCardVariantEnum.SIMPLE
      ? "white"
      : variant === TechCardVariantEnum.WITH_ACTIONS
      ? theme?.colors.background.very_light
      : theme?.colors.background.light};

    font-size: 14px;
  `
);

const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 20px;
  font-weight: bold;
`;

const ActionsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TechCard = ({
  title,
  icon,
  description,
  variant = TechCardVariantEnum.DEFAULT,
  buttonProps,
}: TechCardProps) => {
  return (
    <CardContainer variant={variant}>
      <TitleContainer>
        {icon}
        {title}
      </TitleContainer>
      {description}
      {buttonProps ? (
        <ActionsContainer>
          <Button {...buttonProps} />
        </ActionsContainer>
      ) : null}
    </CardContainer>
  );
};
