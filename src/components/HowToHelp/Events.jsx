import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import backgroundImage from './assets/events-picture.png';
import icon from './assets/events-logo.svg';
import casaMusaLogo from './assets/casa-musa-logo.svg';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background: url(${backgroundImage}) no-repeat right center;
  background-size: cover;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 5em 0 0;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 3em 0 0;
  }
`

const Square = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;
  height: 10em;
  width: 10em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    position: relative;
    top: 0;
    left: 0;
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

const Description = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 8em 4em 4em 4em;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    height: initial;
    box-sizing: border-box;
    padding: 2em 3%;
    margin: 2em 0;
    background: url(${backgroundImage}) no-repeat right center;
    background-size: cover;
  }
`

const Info = styled.div`
  flex: ${props => props.flex};
  display: flex;
  padding: 4.5em 2em 0;
  flex-direction: column;
  font-size: 1.5em;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex: 1;
    font-size: 1em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 0.8em;
  }
`

const Header = styled.h3`
  font-size: 1.5em;
  padding: 0.5rem 0;
`

const Paragraph = styled.p`
  padding: 0.5rem 0;
`

const SmallText = Paragraph.extend`
  font-size: 0.7em;
`

const Logo = styled.img`
  padding: 1em;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 5em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    height: 4em;
  }
`

const VerticalLine = styled.div`
  height: 100%;
  width: 2px;
  background: ${props => props.theme.color.lightBlue};
`

const Events = (props) => (
  <Container>
    <Square>
      <Arrow className="fas fa-angle-left" onClick={() => props.changeModal(false)}/>
      <SquarePicture src={icon}/>
      <SquareText>Eventos</SquareText>
      <Arrow className="fas fa-angle-right" onClick={() => props.changeModal(true)} right/>
    </Square>
    <Description>
      <Info flex='1'>
        <Header>Obra de teatro</Header>
        <Paragraph>Ciclo de teatro en colaboración con casa Musa</Paragraph>
        <SmallText>* Fechas por confirmar *</SmallText>
        <Logo src={casaMusaLogo}/>
      </Info>
      <VerticalLine/>
      <Info flex='1.4'>
        <Header>Conferencia</Header>
        <Paragraph>Guadalupe Nettel</Paragraph>
        <SmallText>* Fechas por confirmar *</SmallText>
      </Info>
    </Description>
  </Container>
);

export default Events;
