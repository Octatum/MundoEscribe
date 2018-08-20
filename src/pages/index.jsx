import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <AppLayout>
    <Navbar />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </AppLayout>
)

export default IndexPage
