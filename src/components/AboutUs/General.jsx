import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import NoteIcon from './NoteIcon';
import SectionBanner from '../SectionBanner';

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  margin-top: 2em;

  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: space-around;
  }
`;

const CustomSection = Section.extend`
  flex-direction: column;
  text-align: ${props => props.center ? 'center' : 'inherit'};
`;

const Header = styled.h2`
  font-size: 4em;
  padding: 2rem;
  color: ${({theme}) => theme.color.black};

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 3em;
  }
`;

const Paragraph = styled.p`
  font-size: 2em;
  width: 50%;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1.5em;
    width: 70%;
  }
`;

function General (props) {
  const {
    iconClickHandler,
  } = props;

  return (
    <CustomSection fluid center>
      <Header>¿Qué es El mundo escribe?</Header>
      <SectionBanner>
        <Paragraph>Somos una fundación que promueve la escritura como herramienta de vida, desde la infancia y para siempre.</Paragraph>
      </SectionBanner>
      <Icons>
        <NoteIcon onClick={() => iconClickHandler("history")}><p>Historia</p></NoteIcon>
        <NoteIcon onClick={() => iconClickHandler("mision")}><p>Misión</p></NoteIcon>
        <NoteIcon onClick={() => iconClickHandler("vision")}><p>Visión</p></NoteIcon>
      </Icons>
    </CustomSection>
  )
}

export default General;
