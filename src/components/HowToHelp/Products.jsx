import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import icon from './assets/products-logo.svg';
import logo from './../assets/logo.svg';
import diary from './assets/products-diary.png';
import pens from './assets/products-pens.png';
import water from './assets/products-water.png';
import shirts from './assets/products-shirts.png';

const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background: #666666;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
    padding: 5em 0 0;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
  }
`

const Square = styled.div`
  min-height: 10em;
  width: 10em;
  position: absolute;
  top: 1em;
  right: 1em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    position: relative;
    top: 0;
    right: 0;
    min-height: 6em;
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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em 1em;
  width: 50%;

  @media screen and (max-width: ${breakpoints.medium}) {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 2em;
    grid-gap: 0.5em 0.5em;
  }
`

const Photo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
`

const OpaqueDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: ${props => hexToRGB(props.theme.color.black, 0.8)};
  opacity: 0;
  transition: all 0.3s;

  ${Photo}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 3em 0;
  }
`

const PhotoName = styled.div`
  width: 100%;
  padding: 0.5em;
  text-align: center;
  background: ${props => hexToRGB(props.theme.color.lightBlue, 0.85)};
  opacity: 0;
  transition: all 0.3s;

  ${Photo}:hover & {
    opacity: 1;
  }
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  font-size: 1.2em;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex: 0;
    padding: 1em 3%;
    font-size: 1em;
    background: #666666;
    color: ${props => props.theme.color.white};
  }
`

const Description = styled.div`
  flex: 1;
  padding: 10em 3em 0;
  text-align: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 5%;
    font-size: 0.8em;
    background: #666666;
  }
`

const Logo = styled.img`
  height: 6em;
  margin: 1em 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1em;
  right: 1em;
  height: 6em;
  width: 6em;
  border: 0;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 2rem;
    width: 2rem;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 0.4em;
  }
`

const pictures = [
  {
    name: 'Diario',
    url: diary
  }, {
    name: 'Pluma',
    url: pens
  }, {
    name: 'Agua',
    url: water
  }, {
    name: 'Playera',
    url: shirts
  }
]

const Products = (props) => (
  <Container>
    <Square>
      <Arrow className="fas fa-angle-left" onClick={() => props.changeModal(false)}/>
      <SquarePicture src={icon}/>
      <SquareText>Productos</SquareText>
      <Arrow className="fas fa-angle-right" onClick={() => props.changeModal(true)} right/>
    </Square>
    <PhotoGrid>
      {pictures.map((pic) => (
        <Photo image={pic.url}>
          <OpaqueDiv>
            <PhotoName>{pic.name}</PhotoName>
          </OpaqueDiv>
        </Photo>
      ))}
      <Button><i className="fas fa-shopping-cart fa-3x"/></Button>
    </PhotoGrid>
    <RightContainer>
      <Description>
        <p>
          Al comprar uno de estos productos estás apoyando a Te tempor exquisitaque an voluptate fore illum ubi tempor.
          <br/><br/>
          Commodo nisi quis ullamco aliqua, ex an ipsum amet anim. Labore an cernantur, dolore distinguantur mentitum tempor eiusmod. Quorum se sed eram quamquam et nulla efflorescere excepteur noster voluptate.
        </p>
        <Logo src={logo}/>
      </Description>
    </RightContainer>
  </Container>
);
export default Products;
