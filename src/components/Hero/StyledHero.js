import styled from "styled-components";

import Button from "../Button/Button";
import CelestialObject from "../CelestialObject/CelestialObject";
import { BackgroundSVG } from "./Hero";

export const StyledSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: grid;
  align-content: center;
  justify-items: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }
`;

export const StyledContentContainer = styled.div`
  text-align: center;
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;

  @media (min-width: 48em) {
    font-size: 3rem;
  }
`;

export const StyledParagraph = styled.p`
  width: 450px;
  @media (min-width: 48em) {
    font-size: 3rem;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 1.1rem;
  padding: 1em 2em;
`;

export const StyledEarthAndMoonContainer = styled.div`
  position: absolute;
  opacity: 0.2;
  inset: 0;
  margin: auto;
  width: 100%;
  aspect-ratio: 1;
  padding: 2em;
  z-index: -10;

  @media (min-width: 48em) {
    position: relative;
    grid-column: 8 / 13;
    opacity: 1;
    padding: 4em;
  }
`;

const startColor = "#A7A7A7";
const startPercentage = "95%"
export const StyledImage = styled.img`
  width: ${props => props.percentage || startPercentage };
  height: ${props => props.percentage || startPercentage };
  position: absolute;
  inset-block-start: 2em;
  inset-inline-end: 2em;
  display: flex;
  aspect-ratio: 1;
  border-radius: 95%;
  object-fit: cover; /* Ensures the image covers the circular container */
  background: ${props => `linear-gradient(45deg, endColor 0%, ${props.color || startColor} 100%)`};
`;

export const StyledEarth = styled(CelestialObject)``

export const StyledMoon = styled(CelestialObject)`
  position: absolute;
  inset-block-start: 2em;
  inset-inline-end: 2em;
  width: 10%;
  height: 10%;
`

export const StyledWaveBackground = styled.svg`
  display: none;
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -20;
  inset-block-end: 0;
  inset-inline: 0;

  @media (min-width: 48em) {
    display: block;
  }
`