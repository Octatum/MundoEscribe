import React from 'react';
import styled from 'styled-components';

import collage from './assets/collage.png';
import logo from '../assets/logo.svg';
import Section from './../Section';

const CustomSection = Section.extend`
  min-height: 600px;
  height: 100vh;
  padding-top: 10%;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 4em 6em 1em;
  text-align: center;
  background: url(${collage}) no-repeat center center;
  background-size: cover;
  color: ${props => props.theme.color.white};
  flex: 1;
  position: relative;

  p {
    font-size: 2em;
    padding: 1rem 0;
  }

  img {
    position: absolute;
    bottom: 2em;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    height: 2.5em;
  }
`

const CollageQuote = () => (
  <CustomSection fluid>
    <Container>
      <p>En la Fundación El mundo escribe sabemos que existe la posibilidad de no poder proteger a una persona de su entorno, pero sí brindarle herramientas para que pueda transformarlo y vivir de la mejor manera.</p>
      <img src={logo}/>
    </Container>
  </CustomSection>
);

export default CollageQuote;
