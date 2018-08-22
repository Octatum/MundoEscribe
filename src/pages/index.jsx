import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import SlideshowSection from '../components/SlideshowSection';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <AppLayout>
    <Navbar />
    <SlideshowSection />
  </AppLayout>
)

export default IndexPage
