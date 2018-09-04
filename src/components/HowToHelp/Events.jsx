import React from 'react';
import styled from 'styled-components';

import backgroundImage from './assets/events-picture.png';
import icon from './assets/events-logo.svg';
import casaMusaLogo from './assets/casa-musa-logo.svg';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 8em 4em 4em 6em;
  background: url(${backgroundImage}) no-repeat right center;
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

const Info = styled.div`
  flex: ${props => props.flex};
  display: flex;
  padding: 4.5em 2em 0;
  flex-direction: column;
  font-size: 1.5em;
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
`

const VerticalLine = styled.div`
  height: 100%;
  width: 2px;
  background: ${props => props.theme.color.lightBlue};
`

const Events = () => (
  <Container>
    <Square>
      <SquarePicture src={icon}/>
      <SquareText>Eventos</SquareText>
    </Square>
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
  </Container>
);

export default Events;
