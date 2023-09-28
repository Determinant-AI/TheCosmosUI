import { planets } from "../../constants";

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard";
import { StyledSection, StyledP } from "./StyledPlanets";

const Planets = () => (
  <>
    <PageHeader title="Team"/>
    <StyledP>
      Our founding team comprises experts with a wealth of experience from the most popular game platforms: Unity and Roblox. We've honed our skills in building player engagement models, training AI agents through simulation, and providing innovative monetization solutions. In this era of AI, we're leveraging our expertise to shape the future of gaming.
    </StyledP>
    <StyledSection>
      {/* <CelestialObjectCardsContainer>
        {planets.map((planet) => (
          <CelestialObjectCard
            key={planet.id}
            color={planet.color}
            name={planet.name}
            to={`/body/${planet.id}`}
          />
        ))}
      </CelestialObjectCardsContainer> */}
    </StyledSection>
  </>
);

export default Planets;