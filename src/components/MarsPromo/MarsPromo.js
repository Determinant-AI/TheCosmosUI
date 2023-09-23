import { colors } from "../../constants";
import Button from "../Button/Button";

import {
  StyledContentContainer,
  StyledDeimos,
  StyledHeading,
  StyledMars,
  StyledMarsAndMoonsContainer,
  StyledParagraph,
  StyledPhobos,
  StyledSection
} from "./StyledMarsPromo";

const MarsPromo = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Learn more about Our AI NPCs</StyledHeading>
      <StyledParagraph>We specialize in making NPCs not just characters within a game but self-aware entities deeply connected to their virtual surroundings and personas.</StyledParagraph>
      <Button $isRed to="/body/mars">Explore</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <StyledMars color={colors.mars}/>
      <StyledPhobos />
      <StyledDeimos />
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;