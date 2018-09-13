import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import logo from './assets/logo-bullet.svg';

const offset = 3;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: ${props => props.right ? '0 0 0 10rem' : '0 10rem 0 0'};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`

const Info = styled.div`
  flex: 1;
  order: ${props => props.right ? 2 : 1};
  display: flex;
  flex-direction: column;
  position: relative;
  top: ${props => props.right && `-${offset}rem`};
  padding: 1rem;
  margin-top: ${props => !props.right && `${offset}rem`};
  color: ${props => props.theme.color.white};
  text-align: ${props => props.right ? 'left' : 'right'};
  background: ${props => props.theme.color.lightBlue};

  @media screen and (max-width: ${breakpoints.medium}) {
    order: initial;
    top: 0;
    width: 100%;
    padding: 1em 25% 3em;
    margin-top: 0;
  }
`

// Can't use 'em' font-size because it breaks the layout when resizing
const Header = styled.h3`
  ${'' /* font-size: 3em; */}
  font-size: 3vw;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 2rem;
    font-size: 3em;
    text-align: center;
  }
`

// Can't use 'em' font-size because it breaks the layout when resizing
const Bullets = styled.ul`
  padding: 1em;
  ${'' /* font-size: 1.2em; */}
  font-size: 1.4vw;
  list-style: none;

  li {
    display: flex;
    justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};
    align-items: center;
    padding: 0.3em 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 50%;
    margin: 0 auto;
    font-size: 1em;
  }
`

const BulletLogo = styled.img`
  order: ${props => !props.right && 2};
  display: inline-block;
  height: 1.7em;
  padding: ${props => props.right ? '0 1em 0 0' : '0 0 0 1em'};
`

const Image = styled.img`
  flex: 1;
  order: ${props => props.right ? 1 : 2};
  margin-bottom: ${props => !props.right && `${offset}rem`};

  @media screen and (max-width: ${breakpoints.medium}) {
    order: initial;
    margin: -1em 0 0;
    width: 80%;
    z-index: 1;
  }
`

const Line = styled.div`
  height: 2px;
  width: 80%;
  position: relative;
  left: ${props => props.right ? '-1rem' : 'calc(20% + 1rem)'};
  background: black;

  @media screen and (max-width: ${breakpoints.medium}) {
    left: initial;
    width: 75%;
    margin: 0.5em auto;
  }
`

const ProjectRow = (props) => (
  <Container right={props.right}>
    <Info right={props.right}>
      <Header>{props.content.title}</Header>
      <Bullets right={props.right}>
        {props.content.bullets.map((b, index) => (
          <li key={index}><BulletLogo src={logo} right={props.right}/><p>{b}</p></li>
        ))}
      </Bullets>
      <Line right={props.right}/>
    </Info>
    <Image src={props.content.image} right={props.right}/>
  </Container>
);

export default ProjectRow;
