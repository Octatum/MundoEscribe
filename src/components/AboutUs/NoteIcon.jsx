import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import icon from './assets/note-icon.svg';

const Container = styled.a`
  position: relative;
  margin: 0 2em;
  text-decoration: none;
  color: inherit;

  p {
    position: absolute;
    top: 40%;
    left: 36%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 0 5%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    margin: 0 3%;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  ${'' /* Styling to be added... */}
`

const NoteIcon = (props) => (
  <Container href={props.href}>
    <img src={icon}/>
    {props.children}
  </Container>
);

export default NoteIcon;
