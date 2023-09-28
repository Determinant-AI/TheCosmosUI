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
  StyledImage,
  StyledSection
} from "./StyledMarsPromo";
import girl from '../../assets/images/girl.png'
import eng_girl from '../../assets/images/eng_girl.png'

const MarsPromo = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Learn more about Our AI NPCs</StyledHeading>
      <StyledParagraph>We specialize in making NPCs not just characters within a game, but self-aware entities deeply connected to their virtual surroundings and personas.</StyledParagraph>
      <Button $isRed to="/body/mars">Explore</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      {/* <StyledMars color={colors.mars}/> */}
      <StyledImage src={girl} />
      {/* <StyledImage src={eng_girl} /> */}
      <StyledPhobos color={colors.mars}/>
      <StyledDeimos color={colors.terre}/>
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;