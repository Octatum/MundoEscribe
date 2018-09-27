// Desarrollado por Octatum en conjunto con Katartico.
import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import CustomSlide from './CustomSlide';

const Layout = Section.extend`
  margin-bottom: 4.2em;
  position: relative;
  margin-top: 6.6em;

  > div {
    flex: 1;

    > div {
      flex: 1;

      > div {
        flex: 1;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.dropdown}) {
    margin-top: 6.6em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 6.6em;
  }
`;

const ImageGalleryWrapper = styled.div`
  position: relative;

  @media screen and (max-width: ${breakpoints.small}) {
    .image-gallery-left-nav,
    .image-gallery-right-nav {
      display: none;
    }
  }
`;

const SlideTitle = styled.h2`
  position: relative;
  padding: 1rem;
  font-size: 4em;
  color: white;

  @media screen and (max-width: ${breakpoints.dropdown}) {
    font-size: 3em;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 2.5em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 1.5em;
    padding: 0.5rem 1em;
  }
`;

const LinkButton = styled.a`
  position: relative;
  background-color: ${({ theme }) => theme.color.lightBlue};
  border: solid 1px #ffffff;
  font-size: 0.9em;
  padding: 0.5em 1em;
  color: white;
  border-radius: 0.6em;
  text-decoration: none;
  margin-top: 1rem;

  @media screen and (max-width: ${breakpoints.small}) {
    margin-top: 0;
  }
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
  text-align: center;
`;

const SlideshowSection = React.forwardRef((props, forwardedRef) => {
  const images = [
    {
      backgroundImage: image1,
    },
    {
      backgroundImage: image2,
    },
    {
      backgroundImage: image3,
    },
    {
      backgroundImage: image4,
    },
  ];

  const { scrollToRef } = props;

  return (
    <Layout fluid innerRef={forwardedRef}>
      <ImageGalleryWrapper>
        <ImageGallery
          items={images}
          renderItem={props => <CustomSlide {...props} />}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          slideDuration={1000}
          autoPlay
          showBullets
          lazyLoad
        />
      </ImageGalleryWrapper>
      <PhraseOverlay>
        <SlideTitle>Ayúdame a crear mi historia</SlideTitle>
        <LinkButton onClick={() => scrollToRef()}>¿Quiénes somos?</LinkButton>
      </PhraseOverlay>
    </Layout>
  );
});

export default SlideshowSection;
