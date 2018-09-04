import React from 'react';
import styled from 'styled-components';

import backgroundImage from './assets/donations-picture.png';
import icon from './assets/donations-logo.svg';
import logo from './../assets/logo.svg';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: url(${backgroundImage}) no-repeat left top fixed;
  background-size: cover;
  color: ${props => props.theme.color.white};
`

const Square = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
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

const Description = styled.div`
  position: absolute;
  top: 12em;
  right: 6em;
  width: 40%;
  text-align: center;
`

const Paragraph = styled.p`
  font-size: 1.2em;
`

const Logo = styled.img`
  height: 6em;
  margin: 1em 0;
`

const Button = styled.button`
  position: absolute;
  bottom: 1em;
  right: 2em;
  padding: 0 2em;
  border: 1px solid ${props => props.theme.color.white};
  border-radius: 10px;
  background: ${props => props.theme.color.lightBlue};
  font-size: inherit;
  color: inherit;
  cursor: pointer;
`

const Donations = () => (
  <Container>
    <Square>
      <SquarePicture src={icon}/>
      <SquareText>Donativos</SquareText>
    </Square>
    <Description>
      <Paragraph>
        Tus donativos económicos hacen posible que cientos de personas encuentren en la escritura un canal de expresión, una luz de esperanza y nuevos caminos para continuar el trayecto de sus vidas.
        <br/>
        <br/>
        No importa la cantidad.
        ¡Ayúdanos a llevar la escritura como herramienta de vida a la vida de muchas personas!
        <br/>
        <br/>
        Tu apoyo como persona física o como empresa, convierte sueños en realidades.
      </Paragraph>
      <Logo src={logo}/>
    </Description>
    <Button>
      <p>Dona aquí</p>
    </Button>
  </Container>
);

export default Donations;
