import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import imageA from './assets/imageA.svg';
import imageB from './assets/imageB.svg';
import imageC from './assets/imageC.svg';
import imageD from './assets/imageD.svg';
import imageE from './assets/imageE.svg';
import imageF from './assets/imageF.svg';
import imageG from './assets/imageG.svg';
import imageH from './assets/imageH.svg';
import imageI from './assets/imageI.svg';
import imageJ from './assets/imageJ.svg';

const CustomSection = Section.extend`
  flex-direction: column;
  text-align: center;
  margin-bottom: 5em;
`;

const Header = styled.h2`
  font-size: 3em;
  font-weight: bold;
  color: ${props => props.theme.color.lightBlue};
  padding-bottom: 0.5em;
  > span {
    margin-right: -0.55em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 2em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1.7em;
  }
`;

const Grid = styled.div`
  display: grid;
  margin: 0 10% 3em;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em 1em;
  justify-items: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${breakpoints.small}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em 2em;
  }
`;

const GridItem = styled.div`
  text-align: center;
`;

const GridImage = styled.img`
  height: 4em;
  padding: 1em;
`;

const GridText = styled.p`
  font-size: 0.9em;
`;

const Bluebar = styled.div`
  height: 3em;
  width: 100%;
  margin: 1em 0;
  background: ${props => props.theme.color.lightBlue};
`;

const content = [
  {
    text: 'Aumenta su capacidad de empatía.',
    image: imageA,
  },
  {
    text: 'Toma conciencia y responsabilidad entre sus decisiones y acciones.',
    image: imageB,
  },
  {
    text: 'Su nivel de bienestar y felicidad aumenta.',
    image: imageC,
  },
  {
    text: 'No se conforma con su situación, actúa para evolucionar.',
    image: imageD,
  },
  {
    text: 'Respeta al entorno, a los demás y a si mismo.',
    image: imageE,
  },
  {
    text:
      'Desempeña mejor sus roles individuales, como estudiante, empleado, ciudadano.',
    image: imageF,
  },
  {
    text: 'Reconoce y potencia sus capacidades.',
    image: imageG,
  },
  {
    text: 'Se esfuerza por ser una mejor persona, hijo, hermano, padre, amigo.',
    image: imageH,
  },
  {
    text: 'Maneja la frustración y el enojo de manera productiva.',
    image: imageI,
  },
  {
    text: 'Sus objetivos y metas son claros y adaptables.',
    image: imageJ,
  },
];

const Benefits = ({ innerRef }) => (
  <CustomSection innerRef={innerRef} fluid>
    <Header>
      ¿En qué se beneficia una persona que escribe<span>?</span>
    </Header>
    <Grid>
      {content.map(item => (
        <GridItem key={item.text.substr(0, 10)}>
          <GridImage src={item.image} />
          <GridText>{item.text}</GridText>
        </GridItem>
      ))}
    </Grid>
    <Bluebar />
  </CustomSection>
);

export default React.forwardRef((props, ref) => (
  <Benefits innerRef={ref} {...props} />
));
