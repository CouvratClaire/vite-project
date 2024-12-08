import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { IconButton } from "./ui/IconButton";
import { IconButtonVariantEnum } from "./ui/IconButton.types";
import { ChatIcon } from "./svg/ChatIcon";
import { Tooltip } from "react-tooltip";
import { PlatformIcon } from "./svg/PlatformIcon";

const FloatingContainer = styled("div")(
  ({ right, bottom }: { right: string; bottom: string }) => css`
    position: absolute;
    bottom: ${bottom};
    right: ${right};
  `
);

export const FloatingChat = () => {
  const showFloating = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return showFloating ? (
    <>
      <FloatingContainer bottom="4vh" right="8vh" id="anchor-chat">
        <IconButton variant={IconButtonVariantEnum.BIG} onClick={() => null}>
          <ChatIcon />
        </IconButton>
      </FloatingContainer>
      <Tooltip anchorSelect="#anchor-chat" noArrow place="left-start">
        Open chat
      </Tooltip>
    </>
  ) : null;
};

export const FloatingPlatform = () => {
  const showFloating = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return showFloating ? (
    <>
      <FloatingContainer bottom="8vh" right="4vh" id="anchor-platform">
        <IconButton variant={IconButtonVariantEnum.BIG} onClick={() => null}>
          <PlatformIcon />
        </IconButton>
      </FloatingContainer>
      <Tooltip anchorSelect="#anchor-platform" noArrow place="left-start">
        Access la Plateforme
      </Tooltip>
    </>
  ) : null;
};
