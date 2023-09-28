import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledTable,
  StyledPlanetParagraph,
  StyledImage,
  StyledImage2
} from "./StyledPromo";
import sing_girl from '../../assets/images/sing_girl.png'
import actions from '../../assets/images/actions.png'
import kids from '../../assets/images/kids.png'
import tool from '../../assets/images/girl_tool.png'
import unity2 from '../../assets/images/unity2.png'
import roblox from '../../assets/images/roblox.png'

const TableComponent = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>NPC id</th>
          <th>player id</th>
          <th>action event</th>
          <th>ts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
          <td>Clicked "Start Game"</td>
          <td>2023-09-20 14:32:20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>102</td>
          <td>Entered Level 2</td>
          <td>2023-09-20 20:52:03</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </StyledTable>
  );
};


const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Customization: Tailored to Perfection</StyledHeading>
    <StyledPlanet>
      <StyledPlanetParagraph>Self-aware Personas</StyledPlanetParagraph>
      <StyledImage src={sing_girl} percentage="70%"/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Environmental Awareness</StyledPlanetParagraph>
      <StyledImage src={kids} percentage="70%"/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Self-driven Actions</StyledPlanetParagraph>
      <StyledImage src={actions} percentage="70%" maxWidth="100em"/>
    </StyledPlanet>
    <StyledHeading>Seamless Integration: Your Game, Your Way</StyledHeading>
    <StyledPlanet>
      <StyledPlanetParagraph>Platform Agnostic</StyledPlanetParagraph>
      <StyledImage2 src={unity2} percentage="30%" maxWidth="120em"/>
      <StyledImage2 src={roblox} percentage="30%" maxWidth="120em"/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Player Engagement Analytics</StyledPlanetParagraph>
      <TableComponent/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Continuous Evolution</StyledPlanetParagraph>
      <StyledImage src={tool} percentage="60%"/>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;