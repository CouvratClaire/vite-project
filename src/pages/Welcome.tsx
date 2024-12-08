import styled from "@emotion/styled";

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Flex } from "../components/ui/MainStyle";
import { Technology } from "../components/Technology";
import { UseCases } from "../components/UseCases";
import { Research } from "../components/Research";
import { Actuality } from "../components/Actuality";
import { Job } from "../components/Job";
import { Footer } from "../components/Footer";
import { FloatingChat, FloatingPlatform } from "../components/FloatingActions";

const WelcomeContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* position: relative; */
`;

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <Header />
      <Home />
      <Flex direction="column" gap="50px">
        <Technology />
        <UseCases />
        <Research />
        <Actuality />
        <Job />
      </Flex>
      <Footer />
      <FloatingChat />
      <FloatingPlatform />
    </WelcomeContainer>
  );
};
