import styled from "styled-components";

import CelestialObject from "../../components/CelestialObject/CelestialObject";
import CelestialObjectInformation from "../../components/CelestialObjectInformation/CelestialObjectInformation";
import LoadingBox from "../../components/LoadingBox/LoadingBox";

export const StyledPageHeaderLoadingBox = styled(LoadingBox)`
  height: 5rem;
`;

const startColor = "#A7A7A7";
const startPercentage = "50%"
const maxWidth = "50em"
export const StyledImage = styled.img`
  width: ${props => props.percentage || startPercentage };
  height: ${props => props.percentage || startPercentage };
  inset-block-start: 2em;
  display: flex;
  inset-inline-end: 2em;
  max-height: 90em;
  max-width: 60em;
  // max-width:  ${props => props.maxWidth || maxWidth }
  aspect-ratio: 1;
  // border-radius: ${props => props.percentage || startPercentage };
  object-fit: cover; /* Ensures the image covers the circular container */
  background: ${props => `linear-gradient(45deg, endColor 0%, ${props.color || startColor} 100%)`};

  @media (min-width: 48em) {
    flex-direction: column;
    text-align: center;
    gap: 2em;
  }
`;

export const StyledCelestialObjectLoadingBox = styled(LoadingBox)`
  aspect-ratio: 1;
  border-radius: 50%;

  @media (min-width: 48em) {
    max-width: 40%;
  }
`;

export const StyledInformationLoadingBox = styled(LoadingBox)`
  height: 30em;

  @media (min-width: 48em) {
    max-width: 50%;
  }
`;

export const StyledCelestialObjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-block: 2em 10em;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledCelestialObject = styled(CelestialObject)`
  @media (min-width: 48em) {
    max-width: 40%;
  }
`;

export const StyledCelestialObjectInformation = styled(CelestialObjectInformation)`
  @media (min-width: 48em) {
    min-width: 50%;
  }
`;

export const StyledMoonsSection = styled.section`
  margin-block: 2em 10em;
  
  h2 {
    font-size: 1.4rem;
    margin-block: 4em 1em;
  }

  @media (min-width: 48em) {
    h2 {
      font-size: 2rem;
    }
  }
`;