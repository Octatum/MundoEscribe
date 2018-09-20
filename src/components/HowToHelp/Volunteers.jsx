import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import backgroundImage from './assets/volunteers-picture.png';
import icon from './assets/donations-logo.svg';
import logo from './../assets/logo.svg';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background: url(${backgroundImage}) no-repeat center bottom fixed;
  background-size: cover;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
    padding: 5em 0 0;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 3em 0 0;
  }
`

const Square = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 6em;
    width: 6em;
  }
`

const SquarePicture = styled.img`
  max-height: 4em;
  max-width: 6em;
  padding: 1.5em;

  @media screen and (max-width: ${breakpoints.medium}) {
    max-height: 2em;
    max-width: 3em;
    padding: 1em;
  }
`

const Arrow = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => !props.right ? '-1em' : 'initial'};
  right: ${props => props.right ? '-1em' : 'initial'};
  font-size: 3em;
  color: ${props => props.theme.color.black};
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none !important;
  }
`

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.3em;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1em;
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-self: flex-start;
`

const Description = styled.div`
  flex: 1;
  padding: 0 3em;
  color: ${props => props.theme.color.white};

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

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    box-sizing: border-box;
    padding: 1em 7% 8em;
    margin: 2em 0;
    background: url(${backgroundImage}) no-repeat center bottom;
    background-size: cover;
    max-height: 400px;

    li::before {
      width: 1.5em;
      margin-left: -1.5em;
    }
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 0.8em;
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

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`

const Volunteers = (props) => (
  <Container>
    <Square>
      <Arrow className="fas fa-angle-left" onClick={() => props.changeModal(false)}/>
      <SquarePicture src={icon}/>
      <SquareText>Voluntarios</SquareText>
      <Arrow className="fas fa-angle-right" onClick={() => props.changeModal(true)} right/>
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
