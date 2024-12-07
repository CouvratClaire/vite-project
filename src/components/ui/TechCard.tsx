import { ReactNode } from "react";
import { Button, ButtonProps } from "./Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type TechCardProps = {
  title: string;
  icon?: ReactNode;
  description: string;
  variant?: TechCardVariantEnum;
  buttonProps?: ButtonProps;
};

export enum TechCardVariantEnum {
  DEFAULT = "default",
  SIMPLE = "simple",
  WITH_ACTIONS = "withActions",
}

const CardContainer = styled("div")(
  ({ variant }: { variant: TechCardVariantEnum }) => css`
    display: flex;
    flex-direction: column;
    color: "#14213E";
    padding: 20px 25px;
    gap: 20px;
    border-radius: 10px;
    max-width: 500px;

    background: ${variant === TechCardVariantEnum.SIMPLE
      ? "white"
      : variant === TechCardVariantEnum.WITH_ACTIONS
      ? "#FFE8C2"
      : "#F1F1F1"};

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
