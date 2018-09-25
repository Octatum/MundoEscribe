import React from 'react';
import styled from 'styled-components';

import _Section from './../Section';
import NoteIcon from './NoteIcon';
import Details from './Details';
import CollageQuote from './CollageQuote';
import logo from './../../../assets/logo.svg';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

const Section = _Section.extend`
  flex-direction: column;
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  margin-top: 5em;
  margin-bottom: 5em;

  h2 {
    font-size: 4em;
    padding: 2rem;
  }
`;

const Description = styled.div`
  position: relative;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  margin: 1em 0;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const WhoAreWe = () => (
  <div>
    <Section fluid center>
      <h2>¿Qué es El mundo escribe?</h2>
      <Description>
        <p>
          Somos una fundación que promueve la escritura como herramienta de
          vida, desde la infancia y para siempre.
        </p>
        <img src={logo} />
      </Description>
      <Icons>
        <NoteIcon>
          <p>Historia</p>
        </NoteIcon>
        <NoteIcon>
          <p>Misión</p>
        </NoteIcon>
        <NoteIcon>
          <p>Visión</p>
        </NoteIcon>
      </Icons>
    </Section>
    <Section>
      <Details image={image1}>
        <h3>Historia</h3>
        <p>
          Desde 2011, sus fundadores promueven la escritura creativa, lenguaje y
          literatura, por lo que la fundación es ideada de la observación de
          beneficios y transformaciones que emergen de una persona que escribe.
          <br />
          <br />
          En 2017 la Fundación El mundo escribe fue constituida bajo la premisa
          de que no existe nada más triste, peligroso y desolador que una
          persona sin la capacidad de expresar su propia voz, sus ideas, sueños
          y creaciones.
          <br />
          <br />
          El mundo escribe abre la puerta a la imaginación creativa para
          transformar el interior de la persona, ampliar sus horizontes, por lo
          tanto, mejorar su bienestar y calidad de vida, independientemente de
          las circunstancias en las que vive. Cientos de niños, jóvenes, adultos
          y adultos mayores, son acompañados para integrar el h´bito de la
          escritura en su vida.
          <br />
          <br />
          Escribir para entender y avanzar.
        </p>
      </Details>
    </Section>
    <Section>
      <Details right image={image2}>
        <h3>Misión</h3>
        <p>
          Somos una fundación que promueve la escritura como herramienta de
          vida, desde la infancia y para siempre.
          <br />
          <br />
          Toda persona tiene derecho a conocer, replantear, crear y vivir su
          propia historia; la escritura es una herramienta simple y útil
          siempre.
        </p>
      </Details>
    </Section>
    <Section>
      <Details image={image3}>
        <h3>Visión</h3>
        <p>
          Nuestra vida transcurre como el resultado de nuestro esfuerzo, pero no
          podemos cerrar los ojos ante el Yo y la Circunstancia nombrados por
          Ortega y Gasset. Yo soy yo y mi circunstancia. La suerte, destine,
          casualidad, coincidencia, hado o cualquiera de los términos con los
          que podamos nombrar el propio entorno.
          <br />
          <br />
          No hay nada más dañino que una persona sin la posibilidad de expresar
          sus ideas, sueños, anhelos, temores y experiencias.
          <br />
          <br />
          Las circunstncias de cada Yo suelen encerrar a la persona en su propia
          tumba, Saint Éxupery, su Self. La escritura, una botella al mar, le
          permite ser y saberse “comunicado”, “expresado”, “en relación”, es
          decir, persona en plenitud.
          <br />
          <br />
          En una persona no expresada:
        </p>
        <ul>
          <li>El dolor de las experiencias se acumula.</li>
          <li>La rabia del enojo crece.</li>
          <li>La violencia irrumpe y permanece.</li>
          <li>Las emociones se empalman y la claridad mental desvanece.</li>
        </ul>
      </Details>
    </Section>
  </div>
);

export default WhoAreWe;
