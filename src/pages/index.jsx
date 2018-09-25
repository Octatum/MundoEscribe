import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import SlideshowSection from '../components/SlideshowSection';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import Benefits from '../components/Benefits';
import HowToHelp from '../components/HowToHelp';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Activities from './../components/Activities/index';
import AppLayout from '../components/AppLayout';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

class IndexPage extends React.Component {
  createSetRef = (refName) => {
    return (elementRef) => {
      this.refs = {
        ...this.refs,
        [refName]: elementRef
      };
    }
  }

  scrollToRef = (refName) => {
    console.log(this.refs[refName]);

    if(this.refs[refName]) {
      this.refs[refName].scrollIntoView();
      window.scrollBy(0, -120);
    }
  }

  render() {
    return (
      <AppLayout>
        <PageLayout>
          <Navbar scrollToRef={this.scrollToRef} />
          <SlideshowSection ref={this.createSetRef("startRef")} />
          <AboutUs ref={this.createSetRef("about")} />
          <Activities ref={this.createSetRef("activities")} />
          <Projects ref={this.createSetRef("projects")} />
          <Benefits ref={this.createSetRef("benefits")} />
          <HowToHelp ref={this.createSetRef("help")} createRef={this.createSetRef} />
          <Contact ref={this.createSetRef("contact")} />
          <Footer />
        </PageLayout>
      </AppLayout>
    )
  }
}

export default IndexPage
