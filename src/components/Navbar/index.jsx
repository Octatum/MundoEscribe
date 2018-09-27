import React, { Component } from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import headerIcon from './assets/header-icon.svg';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 5;
  width: 100%;
`;

const Container = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  top: 0;
  padding: 0.5em 1.5em;
  background: ${props => props.theme.color.white};
  box-shadow: 0 0 15px 7px ${props => props.theme.color.black};

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
  padding: 0.5em;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.dropdown}) {
    display: none !important;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    margin-top: 0.5em;
    font-size: 2em;
  }
`;

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

  > li {
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

  > li {
    display: flex;
    padding: 0.2em;
  }

  @media screen and (max-width: ${breakpoints.dropdown}) {
    width: 100%;
    box-sizing: border-box;
    padding: 4em 5% 1em;

    > li {
      flex: 1;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;

const AnchorListItem = styled(Anchor)`
  display: block;
`;

const Dot = styled.div`
  display: inline-block;
  height: 0.4em;
  width: 0.4em;
  background: #468ec0;
  border-radius: 50%;
`;

const HoverableItem = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.black};

  :hover > ul {
    transform: scale(1);
  }
`;

const Submenu = styled.ul`
  transform: scale(1, 0);
  transition: 300ms ease-in-out transform 50ms;
  transform-origin: top;
  background: white;
  list-style: none;
  top: 0;
  box-sizing: border-box;
  position: absolute;

  > :not(:first-of-type) {
    padding-top: 1em;
    text-align: center;
  }

  > :last-child {
    padding-bottom: 0.5em;
  }
`;

class Navbar extends Component {
  state = {
    open: false,
  };

  toggleMenuState = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  handleAnchorClick = section => {
    this.setState(
      {
        open: false,
      },
      () => {
        this.props.scrollToRef(section);
      }
    );
  };

  render() {
    const toggleIconClass = this.state.open ? 'fas fa-times' : 'fas fa-bars';
    return (
      <NavContainer>
        <Container className={this.state.open && 'open'}>
          <Logo src={headerIcon} />
          <ToggleButton
            className={toggleIconClass}
            onClick={this.toggleMenuState}
          />
          <Links>
            <NavList>
              <li>
                <Anchor onClick={() => this.handleAnchorClick('startRef')}>
                  Inicio
                </Anchor>
              </li>
              <li>
                <Dot />
              </li>
              <li>
                <Anchor onClick={() => this.handleAnchorClick('about')}>
                  ¿Quiénes somos?
                </Anchor>
              </li>
              <li>
                <Dot />
              </li>
              <li>
                <HoverableItem>
                  Lo que hacemos
                  <Submenu>
                    <AnchorListItem
                      onClick={() => this.handleAnchorClick('activities')}
                    >
                      Lo que hacemos
                    </AnchorListItem>
                    <AnchorListItem
                      onClick={() => this.handleAnchorClick('projects')}
                    >
                      Proyectos
                    </AnchorListItem>
                    <AnchorListItem
                      onClick={() => this.handleAnchorClick('benefits')}
                    >
                      Beneficios
                    </AnchorListItem>
                  </Submenu>
                </HoverableItem>
              </li>
              <li>
                <Dot />
              </li>
              <li>
                <Anchor onClick={() => this.handleAnchorClick('help')}>
                  ¿Cómo ayudar?
                </Anchor>
              </li>
              <li>
                <Dot />
              </li>
              <li>
                <Anchor onClick={() => this.handleAnchorClick('report')}>
                  Informes anuales
                </Anchor>
              </li>
              <li>
                <Dot />
              </li>
              <li>
                <Anchor onClick={() => this.handleAnchorClick('contact')}>
                  Contacto
                </Anchor>
              </li>
            </NavList>
            <SocialMediaList>
              <li>
                <Anchor
                  href="https://www.facebook.com/elmundoescribe/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f fa-fw fa-lg" />
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://www.instagram.com/elmundoescribe/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-fw fa-lg" />
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://twitter.com/elmundoescribe"
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-fw fa-lg" />
                </Anchor>
              </li>
            </SocialMediaList>
          </Links>
        </Container>
      </NavContainer>
    );
  }
}

export default Navbar;
