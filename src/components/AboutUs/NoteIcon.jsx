import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import icon from './assets/note-icon.svg';

const Container = styled.div`
  position: relative;
  margin: 0 2em;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

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
`;

const NoteIcon = props => (
  <Container onClick={props.onClick}>
    <img src={icon} />
    {props.children}
  </Container>
);

export default NoteIcon;
