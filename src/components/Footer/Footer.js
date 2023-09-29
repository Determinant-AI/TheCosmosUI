import { planets } from "../../constants";
import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
  // StyledParagraph
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>Join Us in Shaping the Future of Gaming</HeaderFooterP>
        <FooterP>
         Embark on a journey with us as we push the boundaries of what's possible in gaming. Together, we're creating immersive, player-centric experiences where smart NPCs breathe life into digital realms.
        </FooterP>
      </StyledFooterColumn>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Products</HeaderFooterP>
              <FooterA href="#">Book a demo</FooterA>
              <FooterA href="#">Integration guide</FooterA>
              {/* {planets.map((item, index) => {
                return (
                  <FooterLink key={index} to={`/body/${item.id}`}>
                    {item.name}
                  </FooterLink>
                );
              })} */}
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Information</HeaderFooterP>
              <FooterA href="#">How it works</FooterA>
              {/* <FooterA href="#">Download app</FooterA> */}
              <FooterA href="#">Developer portal</FooterA>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>About</HeaderFooterP>
              <FooterA href="#">News and press</FooterA>
              <FooterA href="#">Personal data and collection</FooterA>
              <FooterA href="#">FAQ</FooterA>
            </StyledFooterColumn>
          </StyledFooterRow>
        </StyledFooterRow>
      </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2023 Determinant AI, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Terms of Service</FooterP>
          <FooterP bottom>Privacy Policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};

export default Footer;