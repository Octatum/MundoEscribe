import React from 'react';
import styled from 'styled-components';

import backgroundImage from './assets/volunteers-picture.png';
import icon from './assets/donations-logo.svg';
import logo from './../assets/logo.svg';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: url(${backgroundImage}) no-repeat center bottom fixed;
  background-size: cover;
  color: ${props => props.theme.color.white};
`

const Square = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;
  height: 10em;
  width: 10em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
`

const SquarePicture = styled.img`
  max-height: 4em;
  max-width: 6em;
  padding: 1.5em;
`

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.3em;
`

const FlexContainer = styled.div`
  display: flex;
  position: absolute;
  left: 12em;
  top: 1em;
  right: 1em;
`

const Description = styled.div`
  flex: 1;
  padding: 0 3em;

  li {
    padding: 0.25em 0;
    list-style: none;
  }

  li::before {
    content: "•";
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    color: ${props => props.theme.color.lightBlue};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12em;

  img {
    width: 40%;
  }
`

const Volunteers = () => (
  <Container>
    <Square>
      <SquarePicture src={icon}/>
      <SquareText>Voluntarios</SquareText>
    </Square>
    <FlexContainer>
      <Description>
        <ul>
          <li>Participa como instructor o maestro talleristas o colabora como miembro benefactor de nuestros proyectos.</li>
          <li>Colabora y promueve la misión de El mundo escribe.</li>
          <li>Actúa como enlace entre la fundación y tu empresa o grupo de amistades.
          Vive la experiencia de ayudar a otros en el equilibrio de su expresión.</li>
          <li>Ayídanos a recaudar material de escritura:  hojas, libretas, diarios y plumas.</li>
          <li>Asiste a nuestras actividades culturales de beneficio, obras de teatro y conferencias.</li>
        </ul>
      </Description>
      <Logo>
        <img src={logo}/>
      </Logo>
    </FlexContainer>
  </Container>
);

export default Volunteers;
