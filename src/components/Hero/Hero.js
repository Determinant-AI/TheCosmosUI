import React from 'react';
import Agent from '../../assets/images/ai-agent.png'
import run from '../../assets/images/run.png'
import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledImage,
  StyledEarthAndMoonContainer,
  StyledMoon,
  StyledWaveBackground
} from "./StyledHero";

import { colors } from "../../constants";

const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Embodied AI for</StyledHeading>
      <StyledHeading>Game Develop</StyledHeading>
      <StyledParagraph>We are a passionate team of engineers committed to unlocking the full potential of AI. Our mission is to redefine the gaming experience by automatous NPCs who can observe, act upon and affect the virtual world.</StyledParagraph>
      <StyledButton to="/products">Start exploring</StyledButton>
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      <StyledImage src={Agent} color="blue" percentage="100%" alt="My Image"/>
      {/* <StyledEarth color={colors.terre}/> */}
      <StyledMoon color={colors.mercure}/>

      <StyledImage src={run} color="blue" alt="My Image1" percentage="65%"/>
    </StyledEarthAndMoonContainer>
    <StyledWaveBackground width="1440" height="797" viewBox="0 0 1440 797" fill="none">
      <path d="M1440 575C1025.48 572.005 817.486 0 0 0V796.5H1440V575Z" fill="#141823"/>
    </StyledWaveBackground>
  </StyledSection>
);

export default HeroSection;