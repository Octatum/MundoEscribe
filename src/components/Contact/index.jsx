import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import ContactForm from './ContactForm';
import logo from './assets/logo.svg';
import { StaticQuery, graphql } from 'gatsby';

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

const BannerText = styled(Markdown)`
  font-size: 1.5em;
  align-self: center;
  text-align: center;
  width: 70%;

  em {
    font-style: italic;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 80%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 90%;
    font-size: 1.2em;
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

const Banner = styled.div`
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Contact = ({ innerRef }) => (
  <StaticQuery
    query={graphql`
      {
        quote: markdownRemark(frontmatter: { title: { eq: "contenido_cita" } }) {
          frontmatter {
            content
          }
        }

        address: markdownRemark(frontmatter: { title: { eq: "contenido_direccion" } }) {
          frontmatter {
            content
          }
        }
      }
    `}
    render={({ quote, address }) => {
      const { content } = quote.frontmatter;
      const { content: addressContent } = address.frontmatter;

      return (
        <CustomSection innerRef={innerRef} fluid>
          <Header>Contáctanos</Header>
          <Banner>
            <BannerText>{content}</BannerText>
          </Banner>
          <FormAndInfo>
            <ContactForm />
            <ContactInfo>
              <Logo src={logo} />
              <Markdown>
                {addressContent}
              </Markdown>
            </ContactInfo>
          </FormAndInfo>
        </CustomSection>
      );
    }}
  />
);

export default React.forwardRef((props, ref) => (
  <Contact innerRef={ref} {...props} />
));
