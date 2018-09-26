import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import collage from './assets/collage.png';
import logo from '../assets/logo.svg';
import Section from './../Section';

const CustomSection = Section.extend`
  padding-top: 5%;
  padding-bottom: 10%;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20em;
  padding: 4em 6em;
  text-align: center;
  background: url(${collage}) no-repeat center center;
  background-size: cover;
  color: ${props => props.theme.color.white};
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2em;
    padding: 1rem 0;
  }

  @media screen and (max-width: ${breakpoints.dropdown}) {
    font-size: 0.8em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 23em;
    font-size: 0.7em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 0.6em;
    height: 30em;
  }
`;

const Img = styled.img`
  height: 5em;
  padding: 1em 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0.5em 0;
  }
`;

const CollageQuote = () => (
  <CustomSection fluid>
    <Container>
      <p>
        En la Fundación El mundo escribe sabemos que existe la posibilidad de no
        poder proteger a una persona de su entorno, pero sí brindarle
        herramientas para que pueda transformarlo y vivir de la mejor manera.
      </p>
      <Img src={logo} />
    </Container>
  </CustomSection>
);

export default CollageQuote;
