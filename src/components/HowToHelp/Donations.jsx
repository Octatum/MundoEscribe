import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { graphql, StaticQuery } from 'gatsby';

import breakpoints from '../../utils/breakpoints';
import backgroundImage from './assets/donations-picture.png';
import icon from './assets/donations-logo.svg';
import logo from './../assets/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background: url(${backgroundImage}) no-repeat left top fixed;
  background-size: cover;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: center;
    padding: 5em 0 0;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 3em 0 0;
  }
`;

const Square = styled.div`
  position: relative;
  min-height: 10em;
  width: 10em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    min-height: 6em;
    width: 6em;
  }
`;

const SquarePicture = styled.img`
  max-height: 4em;
  max-width: 6em;
  padding: 1.5em;

  @media screen and (max-width: ${breakpoints.medium}) {
    max-height: 2em;
    max-width: 3em;
    padding: 1em;
  }
`;

const Arrow = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => (!props.right ? '-1em' : 'initial')};
  right: ${props => (props.right ? '-1em' : 'initial')};
  font-size: 3em;
  color: ${props => props.theme.color.black};
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none !important;
  }
`;

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.3em;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1em;
  }
`;

const Description = styled.div`
  width: 50%;
  padding: 1em 2em 0;
  color: ${props => props.theme.color.white};

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    box-sizing: border-box;
    padding: 2em 5% 2em 45%;
    margin: 2em 0;
    background: url(${backgroundImage}) no-repeat left top;
    background-size: cover;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding-left: 30%;
  }
`;

const Paragraph = styled(Markdown)`
  font-size: 1.2em;

  > p:first-of-type {
    text-indent: 1em;
  }

  > :not(:first-child) {
    padding-top: 1em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 0.9em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 0.8em;
  }
`;

const Logo = styled.img`
  height: 6em;
  margin: 1em 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 1em;
  right: 2em;
  padding: 0 2em;
  border: 1px solid ${props => props.theme.color.white};
  border-radius: 10px;
  background: ${props => props.theme.color.lightBlue};
  font-size: inherit;
  color: ${props => props.theme.color.white};
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.medium}) {
    position: initial;
    padding: 0.8em 5em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 0.8em;
  }
`;

const Donations = props => (
  <Container>
    <Square>
      <Arrow
        className="fas fa-angle-left"
        onClick={() => props.changeModal(false)}
      />
      <SquarePicture src={icon} />
      <SquareText>Donativos</SquareText>
      <Arrow
        className="fas fa-angle-right"
        onClick={() => props.changeModal(true)}
        right
      />
    </Square>
    <Description>
      <StaticQuery
        query={graphql`
          {
            markdownRemark(
              frontmatter: { title: { eq: "contenido_donativos" } }
            ) {
              frontmatter {
                content
              }
            }
          }
        `}
        render={({ markdownRemark }) => {
          const { content } = markdownRemark.frontmatter;

          return <Paragraph>{content}</Paragraph>;
        }}
      />
      <Logo src={logo} />
    </Description>
    <Button>
      <p>Dona aquí</p>
    </Button>
  </Container>
);

export default Donations;
