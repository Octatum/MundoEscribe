import React from 'react';
import styled from 'styled-components';

import Section from './../Section';
import NoteIcon from './NoteIcon';
import logo from '../assets/logo.svg';


const Description = styled.div`
  position: relative;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  padding: 1em 0;
  display: flex;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const CustomSection = Section.extend`
  flex-direction: column;
  text-align: ${props => props.center ? 'center' : 'inherit'};
  margin-top: 5em;
  margin-bottom: 5em;
`;

const Header = styled.h2`
  font-size: 4em;
  padding: 2rem;
`;

const Image = styled.img`
  height: 130%;
  max-height: 11em;
  position: absolute;
  right: 10%;
  top: 0;
`;

const Paragraph = styled.p`
  font-size: 2em;
  width: 50%;
`;

function General () {
  return (
    <CustomSection fluid center>
      <Header>¿Qué es El mundo escribe?</Header>
      <Description>
        <Paragraph>Somos una fundación que promueve la escritura como herramienta de vida, desde la infancia y para siempre.</Paragraph>
        <Image src={logo}/>
      </Description>
      <Icons>
        <NoteIcon><p>Historia</p></NoteIcon>
        <NoteIcon><p>Misión</p></NoteIcon>
        <NoteIcon><p>Visión</p></NoteIcon>
      </Icons>
    </CustomSection>
  )
}

export default General;