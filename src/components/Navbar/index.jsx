import React, { Component } from 'react';
import styled from 'styled-components';

import headerIcon from './assets/header-icon.svg';

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0.5em 1.5em;
  background: ${props => props.theme.color.white};
  box-shadow: 0 0 15px 7px ${props => props.theme.color.black};
  z-index: 5;
`;

const Logo = styled.img`
  height: 5.5em;
`;

const Links = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: ${props => props.itemPadding};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  ${'' /* Styling to be added... */}
`

const Dot = styled.div`
  display: inline-block;
  height: 0.4em;
  width: 0.4em;
  background: #468EC0;
  border-radius: 50%;
`;

function Navbar () {
  return (
    <Container>
      <Logo src={headerIcon}/>
      <Links>
        <List itemPadding='0.6em'>
          <li><Anchor href='#top'>Inicio</Anchor></li>
          <li><Dot/></li>
          <li><Anchor href='#about'>¿Quiénes somos?</Anchor></li>
          <li><Dot/></li>
          <li><Anchor href='#projects'>Lo que hacemos</Anchor></li>
          <li><Dot/></li>
          <li><Anchor href='#howToHelp'>¿Cómo ayudar?</Anchor></li>
          <li><Dot/></li>
          <li><Anchor href='#informs'>Informes anuales</Anchor></li>
          <li><Dot/></li>
          <li><Anchor href='#contact'>Contacto</Anchor></li>
        </List>
        <List itemPadding='0.2em'>
          <li><i className='fab fa-facebook-f fa-fw fa-lg'/></li>
          <li><i className='fab fa-instagram fa-fw fa-lg'/></li>
          <li><i className='fab fa-twitter fa-fw fa-lg'/></li>
        </List>
      </Links>
    </Container>
  )
}

export default Navbar;
