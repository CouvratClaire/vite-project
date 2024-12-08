export enum VerticalCardEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type VerticalCardProps = {
  variant: VerticalCardEnum;
  title: string;
  subtitle: string;
  onClick: () => void;
};
