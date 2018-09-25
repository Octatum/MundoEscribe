import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1em 0;

  img,
  div {
    flex: 1;
    padding: 0 3em;
  }

  img {
    order: ${props => (props.right ? 1 : 2)};
  }

  div {
    order: ${props => (props.right ? 2 : 1)};

    h3 {
      padding-bottom: 2rem;
      font-size: 2.5em;
      text-align: ${props => (props.right ? 'right' : 'inherit')};
      color: ${props => props.theme.color.lightBlue};
    }

    ul {
      padding-left: 2em;
      list-style: none;
    }

    li::before {
      display: inline-block;
      vertical-align: middle;
      padding-right: 1rem;
      content: '•';
      font-size: 1.5em;
      color: ${props => props.theme.color.lightBlue};
    }
  }
`;

const EndLine = styled.div`
  position: absolute;
  bottom: -1em;
  left: 20%;
  height: 2px;
  width: 60%;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0),
    ${props => props.theme.color.lightBlue},
    rgba(0, 0, 0, 0)
  );
`;

const Details = props => (
  <Container right={props.right}>
    <div>{props.children}</div>
    <img src={props.image} />
    <EndLine />
  </Container>
);

export default Details;
