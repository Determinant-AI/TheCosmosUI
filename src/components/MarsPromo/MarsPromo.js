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
      <StyledHeading>Learn more about Our AI Streamer</StyledHeading>
      <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledParagraph>
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