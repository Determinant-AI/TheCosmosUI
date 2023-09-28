import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
        Our founding team comprises experts with a wealth of experience from the most popular game platforms: Unity and Roblox. We've honed our skills in building player engagement models, training AI agents through simulation, and providing innovative monetization solutions. In this era of AI, we're leveraging our expertise to shape the future of gaming.
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;