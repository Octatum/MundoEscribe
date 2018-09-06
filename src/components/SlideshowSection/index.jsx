import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Section from './../Section';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import CustomSlide from './CustomSlide';
import styled from 'styled-components';

const Layout = Section.extend`
  margin-bottom: 4.2em;
  position: relative;

  > div {
    flex: 1;

    > div {
      flex: 1;

      > div {
        flex: 1;
      }
    }
  }
`;

const SlideTitle = styled.h2`
  position: relative;
  font-size: 4em;
  color: white;
`;

const LinkButton = styled.a`
  position: relative;
  background-color: ${({theme}) => theme.color.lightBlue};
  border: solid 1px #ffffff;
  font-size: 0.9em;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.6em;
  text-decoration: none;
  margin-top: 1rem;
`;

const PhraseOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  flex-direction: column;
`;

function SlideshowSection () {
  const images = [{
    backgroundImage: image1,
  }, {
    backgroundImage: image2,
  }, {
    backgroundImage: image3,
  }, {
    backgroundImage: image4,
  }];
  
  return (
    <Layout fluid>
      <ImageGallery 
        items={images}
        renderItem={(props) => <CustomSlide {...props} />}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={1000}
        autoPlay
        showBullets
        lazyLoad
      />
      <PhraseOverlay>
        <SlideTitle>Ayúdame a crear mi historia</SlideTitle>
        <LinkButton href="#">¿Quiénes somos?</LinkButton>
      </PhraseOverlay>
    </Layout>
  )
}

export default SlideshowSection;