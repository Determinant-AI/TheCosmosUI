import { planets } from "../../constants";

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard";
import { StyledSection, StyledP } from "./StyledPlanets";

const Planets = () => (
  <>
    <PageHeader title="Team"/>
    <StyledP>
    Our success hinges on the collective talent, passion, and dedication of our team members. At DAI, we foster a culture of humility, openness, and collaboration, where everyone is encouraged to learn, grow, and contribute their unique skills and perspectives. We believe that by nurturing a diverse and supportive environment, we can build a company that truly stands out.
    </StyledP>
    <StyledSection>
      <CelestialObjectCardsContainer>
        {planets.map((planet) => (
          <CelestialObjectCard
            key={planet.id}
            color={planet.color}
            name={planet.name}
            to={`/body/${planet.id}`}
          />
        ))}
      </CelestialObjectCardsContainer>
    </StyledSection>
  </>
);

export default Planets;