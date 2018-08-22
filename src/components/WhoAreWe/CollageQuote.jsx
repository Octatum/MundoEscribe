import React from 'react';
import styled from 'styled-components';

import collage from './assets/collage.png';
import logo from './../../../assets/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 4em 6em 1em;
  font-size: 2em;
  text-align: center;
  background: url(${collage}) no-repeat center center;
  background-size: cover;
  color: ${props => props.theme.color.white};

  img {
    height: 2.5em;
  }
`

const CollageQuote = () => (
  <Container>
    <p>En la Fundación El mundo escribe sabemos que existe la posibilidad de no poder proteger a una persona de su entorno, pero sí brindarle herramientas para que pueda transformarlo y vivir de la mejor manera.</p>
    <img src={logo}/>
  </Container>
);

export default CollageQuote;
