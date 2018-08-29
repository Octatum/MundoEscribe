import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Section from './../Section';
import SectionBanner from './../SectionBanner';
import imageA from './assets/donations.svg';
import imageB from './assets/volunteers.svg';
import imageC from './assets/products.svg';
import imageD from './assets/events.svg';

const CustomSection = Section.extend`
  flex-direction: column;
  align-items: center;
  ${'' /* margin-top: 5em; */}
  margin-bottom: 5em;
`

const Header = styled.h2`
  font-size: 4em;
  ${'' /* font-weight: bold; */}
  padding: 0.5rem;
  text-align: center;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
  color: ${props => props.theme.color.white};

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Square = styled.div`
  position: relative;
  height: 8em;
  width: 8em;
  margin: 0 1em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
`

const SquarePicture = styled.img`
  max-height: 3em;
  max-width: 4em;
  padding: 1.5em;
`

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.2em;
`

const InformBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3em 0;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;
  border: 1px solid ${props => props.theme.color.white};
  border-radius: 10px;
  margin-bottom: 0.5em;
  background: ${props => props.theme.color.lightBlue};
`

const ButtonText = styled.p`
  font-size: ${props => props.size || '1em'};
`

const content = [{
  text: 'Donativos',
  image: imageA,
  link: '/'
}, {
  text: 'Voluntariado',
  image: imageB,
  link: '/'
}, {
  text: 'Productos',
  image: imageC,
  link: '/'
}, {
  text: 'Eventos',
  image: imageD,
  link: '/'
}];

const HowToHelp = () => (
  <CustomSection fluid>
    <Header>¿Cómo ayudar?</Header>
    <Links>
      {content.map((item) => (
        <Link to={item.link}>
          <Square>
            <SquarePicture src={item.image}/>
            <SquareText>{item.text}</SquareText>
          </Square>
        </Link>
      ))}
    </Links>
    <SectionBanner black>
      <Header>Informes anuales</Header>
      <Button>
        <ButtonText>Informes 2018</ButtonText>
        <ButtonText size="0.6em">(en proceso)</ButtonText>
      </Button>
    </SectionBanner>
  </CustomSection>
);

export default HowToHelp;
