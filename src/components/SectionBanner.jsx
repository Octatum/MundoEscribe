import React from 'react';
import styled from 'styled-components';

import logo from './assets/logo.svg';

const Description = styled.div`
  position: relative;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  padding: 1em 0;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 130%;
  max-height: 11em;
  position: absolute;
  right: 10%;
  top: 0;
`;

function SectionBanner ({children}) {
  return (
    <Description>
      {children}
      <Image src={logo}/>
    </Description>
  )
}

export default SectionBanner;