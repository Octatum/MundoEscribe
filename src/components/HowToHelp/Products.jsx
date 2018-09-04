import React from 'react';
import styled from 'styled-components';

import icon from './assets/products-logo.svg';
import logo from './../assets/logo.svg';
import diary from './assets/products-diary.png';
import pens from './assets/products-pens.png';
import water from './assets/products-water.png';
import shirts from './assets/products-shirts.png';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background: #666666;
  color: ${props => props.theme.color.white};
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em 1em;
  width: 50%;
`

const Photo = styled.div`
  height: 100%;
  width: 100%;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Square = styled.div`
  position: relative;
  min-height: 10em;
  width: 10em;
  align-self: flex-end;
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
  flex: 1;
  padding: 4em 3em 0;
  font-size: 1.2em;
  text-align: center;
`

const Logo = styled.img`
  height: 6em;
  margin: 1em 0;
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
  color: inherit;
  cursor: pointer;
`

const pictures = [diary, pens, water, shirts];

const Products = () => (
  <Container>
    <PhotoGrid>
      {pictures.map((pic) => (
        <Photo image={pic}/>
      ))}
    </PhotoGrid>
    <RightContainer>
      <Square>
        <SquarePicture src={icon}/>
        <SquareText>Productos</SquareText>
      </Square>
      <Description>
        <p>
          Al comprar uno de estos productos estás apoyando a Te tempor exquisitaque an voluptate fore illum ubi tempor.
          <br/><br/>
          Commodo nisi quis ullamco aliqua, ex an ipsum amet anim. Labore an cernantur, dolore distinguantur mentitum tempor eiusmod. Quorum se sed eram quamquam et nulla efflorescere excepteur noster voluptate.
        </p>
        <Logo src={logo}/>
      </Description>
    </RightContainer>
    <Button><i className="fas fa-shopping-cart fa-3x"/></Button>
  </Container>
);
export default Products;
