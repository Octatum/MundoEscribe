import React, { Component } from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
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

  @media screen and (max-width: ${breakpoints.dropdown}) {
    display: block;
  }
`;

const Logo = styled.img`
  height: 5.5em;
`;

const ToggleButton = styled.i`
  float: right;
  font-size: 3em;
  padding: 1rem;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.dropdown}) {
    display: none !important;
  }
`

const Links = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: ${breakpoints.dropdown}) {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s;

    .open & {
      max-height: 500px;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    display: flex;
    padding: 0.3em 0.6em;
  }

  @media screen and (max-width: ${breakpoints.dropdown}) {
    flex-direction: column;
  }
`;

const SocialMediaList = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    padding: 0.2em;
  }

  @media screen and (max-width: ${breakpoints.dropdown}) {
    width: 100%;
    box-sizing: border-box;
    padding: 4em 5% 1em;

    li {
      flex: 1;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
    }
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.color.black};
`;

const Dot = styled.div`
  display: inline-block;
  height: 0.4em;
  width: 0.4em;
  background: #468EC0;
  border-radius: 50%;
`;

class Navbar extends Component {
  state = {
    open: false
  }

  toggleMenuState = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }))
  }

  closeMenu = () => {
    this.setState(() => ({
      open: false
    }));
  }

  render() {
    const toggleIconClass = (this.state.open ? 'fas fa-times' : 'fas fa-bars');

    return (
      <Container className={this.state.open && 'open'}>
        <Logo src={headerIcon}/>
        <ToggleButton className={toggleIconClass} onClick={this.toggleMenuState}/>
        <Links>
          <NavList>
            <li>
              <Anchor href='#top' onClick={this.closeMenu}>Inicio</Anchor>
            </li>
            <li>
              <Dot/>
            </li>
            <li>
              <Anchor href='#about' onClick={this.closeMenu}>¿Quiénes somos?</Anchor>
            </li>
            <li>
              <Dot/>
            </li>
            <li>
              <Anchor href='#activities' onClick={this.closeMenu}>Lo que hacemos</Anchor>
            </li>
            <li>
              <Dot/>
            </li>
            <li>
              <Anchor href='#howToHelp' onClick={this.closeMenu}>¿Cómo ayudar?</Anchor>
            </li>
            <li>
              <Dot/>
            </li>
            <li>
              <Anchor href='#informs' onClick={this.closeMenu}>Informes anuales</Anchor>
            </li>
            <li>
              <Dot/>
            </li>
            <li>
              <Anchor href='#contact' onClick={this.closeMenu}>Contacto</Anchor>
            </li>
          </NavList>
          <SocialMediaList>
            <li>
              <Anchor href="https://www.facebook.com/elmundoescribe/" target="_blank">
                <i className='fab fa-facebook-f fa-fw fa-lg'/>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.instagram.com/elmundoescribe/" target="_blank">
                <i className='fab fa-instagram fa-fw fa-lg'/>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://twitter.com/elmundoescribe" target="_blank">
                <i className='fab fa-twitter fa-fw fa-lg'/>
              </Anchor>
            </li>
          </SocialMediaList>
        </Links>
      </Container>
    )
  }
}

export default Navbar;
