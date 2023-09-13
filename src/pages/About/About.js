import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
          At Determinant AI, we pride ourselves on collaborating closely with domain experts to develop customized AI assistants tailored to the unique needs of each industry. 
        </AboutP>
        <AboutP>
        Throughout our careers, we have witnessed the transformative power of AI and its potential to revolutionize the way we work. However, we also realized that existing AI solutions often lack the customization, security, and domain-specific expertise required to truly meet the unique needs of businesses. With Determinant AI, we are determined to bridge this gap by collaborating closely with domain experts and leveraging our extensive experience in AI and machine learning.
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;