import React from 'react';
import styled from 'styled-components';

import logo from './assets/logo.svg';

const Description = styled.div`
  position: relative;
  background: ${props => props.black ? props.theme.color.black : props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 130%;
  max-height: 11em;
  position: absolute;
  right: 10%;
  top: 0;
`;

function SectionBanner (props) {
  return (
    <Description id={props.id} black={props.black}>
      {props.children}
      <Image src={logo}/>
    </Description>
  )
}

export default SectionBanner;
