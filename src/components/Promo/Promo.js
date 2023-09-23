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
    <StyledHeading>AI Customization - Tailored to Perfection</StyledHeading>
    <StyledPlanet>
      <StyledCelestialObject color={colors.mars}/>
      <StyledPlanetParagraph>Self-aware Personas</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.venus}/>
      <StyledPlanetParagraph>Environmental Awareness</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Self-driven Actions</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledHeading>Seamless Integration - Your Game, Your Way</StyledHeading>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Platform Agnostic</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Player Engagement Analytics</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Continuous Evolution</StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;