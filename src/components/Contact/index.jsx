import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import SectionBanner from './../SectionBanner';
import ContactForm from './ContactForm';
import logo from './assets/logo.svg';

const CustomSection = Section.extend`
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 3em;
  padding-bottom: 0.5em;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 1rem 0;
  }
`;

const BannerText = styled.p`
  font-size: 1.5em;
  font-style: italic;
  align-self: flex-start;
  margin-left: 2rem;
  width: 55%;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 80%;
  }
`;

const FormAndInfo = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 2em 5%;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  text-align: right;
  font-size: 0.8em;
  width: 20em;

  @media screen and (max-width: ${breakpoints.medium}) {
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 80%;
  padding-top: 7em;
`;

const AuthorQuote = styled(BannerText)`
  font-size: 1.5rem;
  box-sizing: border-box;
  padding-right: 1rem;
  text-align: right;
  flex: 1;
  align-self: flex-end;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1.2rem;
  }
`;

const Banner = styled.div`
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Contact = ({ innerRef }) => (
  <CustomSection innerRef={innerRef} fluid>
    <Header>Contáctanos</Header>
    <Banner>
      <BannerText>
        “Toda persona tiene derecho a la expresión libre de su voz. Cuestionar,
        buscar y crear alternativas es el camino de todo cambio”.
      </BannerText>
      <AuthorQuote>Ángeles Favela, Fundadora</AuthorQuote>
    </Banner>
    <FormAndInfo>
      <ContactForm />
      <ContactInfo>
        <Logo src={logo} />
        <p>
          contacto@elmundoescribe.org
          <br />
          Tel. (81) 2718 0074
          <br />
          Plaza Río | Avenida San Pedro 801 L9
          <br />
          Colonia Fuentes del Valle CP 66224
          <br />
          San Pedro, Garza García, N.L. , México
        </p>
      </ContactInfo>
    </FormAndInfo>
  </CustomSection>
);

export default React.forwardRef((props, ref) => (
  <Contact innerRef={ref} {...props} />
));
