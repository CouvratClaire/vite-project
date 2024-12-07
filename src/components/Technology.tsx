import styled from "@emotion/styled";
import { BlockContainer, Title } from "./ui/MainStyle";
import { TechCard } from "./ui/TechCard";
import { ShiningEffectIcon } from "./svg/ShiningEffectIcon";
import { SmartphoneIcon } from "./svg/SmartphoneIcon";
import { MeteorIcon } from "./svg/MeteorIcon";
import { TrophyIcon } from "./svg/TrophyIcon";

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 20px;
`;

export const Technology = () => {
  return (
    <BlockContainer>
      <Title>Cutting edge technology for developers.</Title>
      <Grid>
        <TechCard
          icon={<ShiningEffectIcon />}
          title="Openness"
          description="We lead the market of open source generative technologies to bring trust and transparency in the field and foster decentralised technology development."
        />
        <TechCard
          icon={<SmartphoneIcon />}
          title="Portability"
          description="Our technology is available through serverless APIs, public cloud services (on Azure AI, on Amazon Bedrock), and for VPC/on-premise deployment. Our independence from cloud providers is a guarantee of our customers’ independence."
        />
        <TechCard
          icon={<MeteorIcon />}
          title="Value and speed"
          description="Our flagship model, Mistral Large, has independently validated top-tier reasoning in multiple languages. All our models bring unmatched value and latency at their price points."
        />
        <TechCard
          icon={<TrophyIcon />}
          title="Customisation"
          description="Our models can be fine-tuned and modified at will for your business to create differentiated AI applications."
        />
      </Grid>
    </BlockContainer>
  );
};
