import React from 'react';
import styled from 'styled-components';

import icon from './assets/note-icon.svg';

const Container = styled.a`
  position: relative;
  margin: 0 4em;
  text-decoration: none;
  color: inherit;

  p {
    position: absolute;
    top: 40%;
    left: 36%;
    transform: translate(-50%, -50%);
    font-weight: bold;
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
