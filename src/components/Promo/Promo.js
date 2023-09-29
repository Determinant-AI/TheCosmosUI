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
import note from '../../assets/images/note.png'
import actions from '../../assets/images/actions.png'
import kids from '../../assets/images/kids.png'
import tool from '../../assets/images/girl_tool.png'
import unity2 from '../../assets/images/unity2.png'
import roblox from '../../assets/images/roblox_logo_white_new.svg'
import unreal from '../../assets/images/unreal.png'

const TableComponent = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>action</th>
          <th>reasoning</th>
          <th>feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td font-size="small">Player's low health, potential traps in the dungeon</td>
          <td font-size="small">Suggest using healing items, scan for traps, warn the player of dangers</td>
          <td font-size="small">Faster trap spotting, suggest healing sooner.</td>
        </tr>
        <tr>
          <td font-size="small">Approaching night, need for resources and safety</td>
          <td font-size="small">Set up camp, gather firewood, hunt for food, assist in combat, advise on tactics</td>
          <td font-size="small">Great in combat! Collect more firewood earlier.</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </StyledTable>
  );
};


const PromoSection = () => (
  <StyledSection>
    <StyledHeading>NPCs are not just about Conversational AI</StyledHeading>
    <StyledPlanet>
      <StyledPlanetParagraph>Environmental Awareness</StyledPlanetParagraph>
      <StyledImage src={kids} percentage="70%"/>
      <StyledPlanetParagraph weight="400">Observe the game world and interact with the complex environment.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Reasoning and Planning</StyledPlanetParagraph>
      <StyledImage src={note} percentage="70%"/>
      <StyledPlanetParagraph weight="400">Reasoning and planning with the power of the large language models.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Self-initiated Embodied Actions</StyledPlanetParagraph>
      <StyledImage src={actions} percentage="70%" maxWidth="100em"/>
      <StyledPlanetParagraph weight="400">Dynamic actions from the runtime generated code in the game engine.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledHeading>Code-driven integration for simplified workflow</StyledHeading>
    <StyledPlanet>
      <StyledPlanetParagraph>Agnostic game engine platforms</StyledPlanetParagraph>
      <StyledImage2 src={unity2} percentage="30%" maxWidth="120em"/>
      <StyledImage2 src={roblox} percentage="30%" maxWidth="120em"/>
      <StyledImage2 src={unreal} percentage="50%" maxWidth="120em"/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Engagement insights for continuous improvement</StyledPlanetParagraph>
      <TableComponent/>
    </StyledPlanet>
    <StyledPlanet>
      <StyledPlanetParagraph>Optimized architecture for data intensive use cases</StyledPlanetParagraph>
      <StyledImage src={tool} percentage="60%"/>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;