import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import SlideshowSection from '../components/SlideshowSection';
import AboutUs from '../components/AboutUs';
import Activities from './../components/Activities/index';
import Projects from '../components/Projects';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <AppLayout>
    <Navbar />
    <SlideshowSection />
    <AboutUs />
    <Activities />
    <Projects/>
  </AppLayout>
)

export default IndexPage
