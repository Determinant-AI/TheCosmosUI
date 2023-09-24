import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledEarthAndMoonContainer,
  StyledEarth,
  StyledMoon,
  StyledWaveBackground
} from "./StyledHero";

import { colors } from "../../constants";

const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Welcome to </StyledHeading>
      <StyledHeading>Determinant AI</StyledHeading>
      <StyledParagraph>We are a passionate team of engineers committed to unlocking the full potential of AI. Our mission is to redefine the gaming experience by crafting intelligent Non-Playable Characters (NPCs) that elevate virtual worlds to new heights.</StyledParagraph>
      <StyledButton to="/planets">Start exploring</StyledButton>
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      <StyledEarth color={colors.terre}/>
      <StyledMoon color={colors.moon}/>
    </StyledEarthAndMoonContainer>
    <StyledWaveBackground width="1440" height="797" viewBox="0 0 1440 797" fill="none">
      <path d="M1440 575C1025.48 572.005 817.486 0 0 0V796.5H1440V575Z" fill="#141823"/>
    </StyledWaveBackground>
  </StyledSection>
);

export default HeroSection;