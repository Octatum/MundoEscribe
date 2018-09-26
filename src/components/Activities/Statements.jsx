import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import SectionBanner from './../SectionBanner';
import logo from '../assets/blue-logo.svg';

const Layout = styled.div`
  flex: 1;
`;

const Header = styled.h2`
  font-size: 3.5em;
  margin: 0.5em 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 3em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 2em;
  }
`;

const Subheader = styled.div`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  padding: 1em;
  font-weight: bold;
`;

const PhrasesSection = styled.section`
  display: grid;
  height: 30em;
  grid-template-columns: 0.5fr 1.3fr 0.5fr 0.3fr 2.1fr 0.8fr 1.8fr;
  grid-template-rows: 1.1fr 0.8fr 1.1fr;
  grid-gap: 1px 1px;
  margin: 0 2em;
  grid-template-areas:
    ". p1 p1 p1 p2 p3 p3"
    "p6 p6 p6 . . . p4"
    ". . p5 p5 p5 p5 .";
  background-image: url("${logo}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15%;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1.6fr 0.7fr 0.7fr 1.5fr;
    height: auto;
    grid-template-areas:
      ". p2 p2 p2 ."
      "p1 p1 . p3 p3"
      "p6 p6 . p4 p4"
      ". p5 p5 p5 .";
    font-size: 0.7em;
  }
`;

const PhraseLayout = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.2em;
    width: 100%;
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;

const PhraseOne = PhraseLayout.extend`
  grid-area: p1;
  height: 70%;
  margin-bottom: 10%;
  align-self: end;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 0;
    align-self: start;
  }
`;

const PhraseTwo = PhraseLayout.extend`
  grid-area: p2;
  width: 80%;
  height: 50%;
  align-self: start;
  justify-self: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70%;
    width: 100%;
    align-self: start;
  }
`;

const PhraseThree = PhraseLayout.extend`
  grid-area: p3;
  height: 50%;
  width: 95%;
  align-self: end;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70%;
    width: 100%;
    align-self: start;
  }
`;

const PhraseFour = PhraseLayout.extend`
  grid-area: p4;
  width: 85%;
  height: 70%;
  align-self: end;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const PhraseFive = PhraseLayout.extend`
  grid-area: p5;
  height: 80%;
  width: 95%;
  align-self: center;
  justify-self: end;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: initial;
    width: 100%;
    padding-top: 1em;
  }
`;

const PhraseSix = PhraseLayout.extend`
  grid-area: p6;
  width: 95%;
  justify-self: end;
  height: 70%;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    align-self: end;
  }
`;

const BigNumber = styled.div`
  font-size: 6em;
  line-height: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.lightBlue};
  margin-top: -1rem;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 4em;
    line-height: 2rem;
  }
`;

const PhraseDisplay = styled.p`
  text-align: left;
  font-weight: bold;
  margin-left: 1em;
  flex: 1;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${breakpoints.medium}) {
    position: relative;
    margin-left: 0.5em;
    font-weight: normal;
    text-align: left;
  }
`;

const Phrases = [
  {
    id: 6,
    phrase: 'Al escribir aprendemos y nos descubrimos.',
  },
  {
    id: 1,
    phrase: 'Quien hace, aprende.',
  },
  {
    id: 2,
    phrase:
      'Escribir para erradicar el miedo, para reconocérnos únicos y a la vez, hermanados con todas las historias.',
  },
  {
    id: 3,
    phrase: 'Narrar para comprender, para crecer.',
  },
  {
    id: 4,
    phrase:
      'Escribir para adueñarnos de nuestra propia voz, para caminar con la dignidad y el empoderamiento de sabernos dueños de nuestra propia historia.',
  },
  {
    id: 5,
    phrase: 'La escritura es una forma de la expresión del yo.',
  },
];

function Statements() {
  return (
    <Layout>
      <SectionBanner>
        <Header>Lo que hacemos</Header>
      </SectionBanner>
      <Subheader>
        Todos nuestros proyectos están encaminados a seis enunciados. Creemos y
        trabajamos por ello.{' '}
      </Subheader>
      <PhrasesSection>
        <PhraseOne>
          <BigNumber>{Phrases[0].id}</BigNumber>
          <PhraseDisplay>{Phrases[0].phrase}</PhraseDisplay>
        </PhraseOne>
        <PhraseTwo>
          <BigNumber>{Phrases[1].id}</BigNumber>
          <PhraseDisplay>{Phrases[1].phrase}</PhraseDisplay>
        </PhraseTwo>
        <PhraseThree>
          <BigNumber>{Phrases[2].id}</BigNumber>
          <PhraseDisplay>{Phrases[2].phrase}</PhraseDisplay>
        </PhraseThree>
        <PhraseFour>
          <BigNumber>{Phrases[3].id}</BigNumber>
          <PhraseDisplay>{Phrases[3].phrase}</PhraseDisplay>
        </PhraseFour>
        <PhraseFive>
          <BigNumber>{Phrases[4].id}</BigNumber>
          <PhraseDisplay>{Phrases[4].phrase}</PhraseDisplay>
        </PhraseFive>
        <PhraseSix>
          <BigNumber>{Phrases[5].id}</BigNumber>
          <PhraseDisplay>{Phrases[5].phrase}</PhraseDisplay>
        </PhraseSix>
      </PhrasesSection>
    </Layout>
  );
}

export default Statements;
