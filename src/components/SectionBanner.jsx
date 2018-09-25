import React from 'react';
import styled from 'styled-components';

import logo from './assets/logo.svg';
import breakpoints from '../utils/breakpoints';

const Description = styled.div`
  position: relative;
  background: ${props =>
    props.dark ? props.theme.color.darkGray : props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  height: 140%;
  position: absolute;
  right: 10%;
  top: -10%;

  @media screen and (max-width: ${breakpoints.dropdown}) {
    right: 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

function SectionBanner(props) {
  const { innerRef } = props;

  return (
    <Description innerRef={innerRef} dark={props.dark}>
      {props.children}
      <Image src={logo} hidden={props.hideImage} />
    </Description>
  );
}

export default SectionBanner;
