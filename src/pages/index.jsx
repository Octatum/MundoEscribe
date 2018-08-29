import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import SlideshowSection from '../components/SlideshowSection';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Benefits from '../components/Benefits';
import HowToHelp from '../components/HowToHelp';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <AppLayout>
    <Navbar />
    <SlideshowSection />
    <AboutUs />
    <Projects/>
    <Benefits />
    <HowToHelp />
  </AppLayout>
)

export default IndexPage
