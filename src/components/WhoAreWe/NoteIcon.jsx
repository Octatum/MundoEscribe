import React from 'react';
import styled from 'styled-components';

import icon from './assets/note-icon.svg';

const Container = styled.div`
  position: relative;
  padding: 0 4em;

  p {
    position: absolute;
    top: 40%;
    left: 44%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
`

const NoteIcon = (props) => (
  <Container>
    <img src={icon}/>
    {props.children}
  </Container>
);

export default NoteIcon;
