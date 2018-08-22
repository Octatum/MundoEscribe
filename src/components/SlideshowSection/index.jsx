import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Section from './../Section';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import CustomSlide from './CustomSlide';

const Layout = Section.extend`
  margin-bottom: 4.2em;

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

function SlideshowSection () {
  const images = [{
    backgroundImage: image1,
    title: "Ayúdame a crear mi historia",
    buttonUrl: "#",
    buttonText: "¿Quiénes somos?"
  }, {
    backgroundImage: image2,
    title: "Ayúdame a crear mi historia",
    buttonUrl: "#",
    buttonText: "¿Quiénes somos?"
  }, {
    backgroundImage: image3,
    title: "Ayúdame a crear mi historia",
    buttonUrl: "#",
    buttonText: "¿Quiénes somos?"
  }, {
    backgroundImage: image4,
    title: "Ayúdame a crear mi historia",
    buttonUrl: "#",
    buttonText: "¿Quiénes somos?"
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
    </Layout>
  )
}

export default SlideshowSection;