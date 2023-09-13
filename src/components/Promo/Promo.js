import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph
} from "./StyledPromo";

const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Customize AI bot for your need</StyledHeading>
    <StyledPlanet>
      <StyledCelestialObject color={colors.mars}/>
      <StyledPlanetParagraph>AI Podcaster | Streamer </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.venus}/>
      <StyledPlanetParagraph>AI Project Manager </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>AI Operation Engineer </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledHeading>Promote your AI bot to monetize</StyledHeading>
  </StyledSection>
)

export default PromoSection;