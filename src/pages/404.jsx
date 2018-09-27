// Desarrollado por Octatum en conjunto con Katartico.
import React from 'react';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import Footer from '../components/Footer';
import Link from 'gatsby-link';

const PageLayout = styled.div`
  display: flex;
  align-items: center;
  height: 88vh;
  justify-content: center;
  flex-direction: column;
`;

const NotFoundText = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 3em;
  text-align: center;
`;

const BackUrl = styled(Link)`
  color: ${({ theme }) => theme.color.lightBlue};
  text-align: center;
`;

const NotFoundPage = () => (
  <AppLayout>
    <PageLayout>
      <NotFoundText>La página que buscas no fue encontrada.</NotFoundText>
      <BackUrl to="/">Da click aquí para volver a la página de inicio.</BackUrl>
    </PageLayout>
    <Footer transparentExtend />
  </AppLayout>
);

export default NotFoundPage;
