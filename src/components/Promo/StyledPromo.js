import styled from "styled-components";

import CelestialObject from "../CelestialObject/CelestialObject";

export const StyledSection = styled.section`
  background-color: #141823;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-block: 4em;

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(3, minmax(10em, 100%));
    gap: 4em;
    align-items: start;
    justify-content: space-between;
  }
`;

export const StyledHeading = styled.h2`
  text-align: center;
  @media (min-width: 48em) {
    font-size: 2.5rem;
    grid-column: 1 / 4;
  }
`;

export const StyledPlanet = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (min-width: 48em) {
    flex-direction: column;
    text-align: center;
    gap: 2em;
  }
`;

export const StyledCelestialObject = styled(CelestialObject)`
  max-width: 10em;
`;

export const StyledPlanetParagraph = styled.p`
  margin: 0;
  font-weight: 450;
  flex-grow: 1;
`;

const startColor = "#A7A7A7";
const startPercentage = "95%"
const maxWidth = "50em"
export const StyledImage = styled.img`
  width: ${props => props.percentage || startPercentage };
  height: ${props => props.percentage || startPercentage };
  inset-block-start: 2em;
  inset-inline-end: 2em;
  max-height: 100em;
  max-width: 50em;
  // max-width:  ${props => props.maxWidth || maxWidth }
  aspect-ratio: 1;
  // border-radius: ${props => props.percentage || startPercentage };
  object-fit: cover; /* Ensures the image covers the circular container */
  background: ${props => `linear-gradient(45deg, endColor 0%, ${props.color || startColor} 100%)`};
`;



export const StyledImage2 = styled.img`
  width: ${props => props.percentage || startPercentage };
  height: ${props => props.percentage || startPercentage };
  inset-block-start: 2em;
  inset-inline-end: 2em;
  max-width:  ${props => props.maxWidth || maxWidth }
  aspect-ratio: 1;
  object-fit: cover; /* Ensures the image covers the circular container */
  background: ${props => `linear-gradient(45deg, endColor 0%, ${props.color || startColor} 100%)`};
`;


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ddd; /* Add a 2px solid border around the table */

  th, td {
    border: 1px solid #ddd; /* Add a 1px solid border to table cells */
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #b5b3b3;
  }
`;