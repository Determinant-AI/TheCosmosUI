import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
          At Determinant AI, our customers are at the heart of everything we do. We work closely with domain experts and industry partners to ensure that our AI assistants are tailored to the specific needs of each business. By maintaining an open dialogue and fostering strong relationships with our customers, we can create AI solutions that truly empower businesses to thrive in a rapidly changing world.
        </AboutP>
        <AboutP>
          We understand that the modern business landscape is fraught with security and privacy concerns. At Determinant AI, we prioritize the protection of our customers' data and strive to build AI solutions that are both powerful and secure. Our products feature robust security measures, including encryption, data segmentation, and secure authentication, so our customers can trust that their information is safe with us.
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;