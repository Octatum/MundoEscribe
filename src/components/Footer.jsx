import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Text = styled.p`
  padding: 1em;
  color: ${props => props.theme.color.gray};
  text-align: center;
`;

const TransparentDiv = styled.span`
  color: transparent;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

const Footer = ({ transparentExtend }) => (
  <Container>
    <Text>
      Copyright © Todos los derechos reservados. El mundo escribe 2018. <br />
      {transparentExtend && (
        <TransparentDiv>
          Desa{/**/}rro{/**/}llado por Oct{/**/}atu{/**/}m{/**/} y K{/**/}atart{/**/}ic{/**/}o
        </TransparentDiv>
      )}
    </Text>
  </Container>
);

export default Footer;
