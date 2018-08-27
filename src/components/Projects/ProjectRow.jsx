import React from 'react';
import styled from 'styled-components';

import logo from './assets/logo-bullet.svg';

const offset = 3;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: ${props => props.right ? '0 0 0 10rem' : '0 10rem 0 0'};
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
`

// Can't use 'em' font-size because it breaks the layout when resizing
const Header = styled.h3`
  ${'' /* font-size: 3em; */}
  font-size: 3vw;
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
`

const BulletLogo = styled.img`
  order: ${props => !props.right && 2};
  display: inline-block;
  height: 1.3em;
  padding: ${props => props.right ? '0 1em 0 0' : '0 0 0 1em'};
`

const Image = styled.img`
  flex: 1;
  order: ${props => props.right ? 1 : 2};
  margin-bottom: ${props => !props.right && `${offset}rem`};
`

const Line = styled.div`
  height: 1%;
  max-height: 2px;
  width: 80%;
  position: relative;
  left: ${props => props.right ? '-1rem' : 'calc(20% + 1rem)'};
  background: black;
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
