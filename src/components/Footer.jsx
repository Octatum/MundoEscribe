import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Text = styled.p`
  padding: 1em;
  color: ${props => props.theme.color.gray};
`

const Footer = () => (
  <Container>
    <Text>Copyright © Todos los derechos reservados. El mundo escribe 2018. Desarrollado por Katartico | Octatum</Text>
  </Container>
);

export default Footer;
