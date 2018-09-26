import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

const Layout = styled.div`
  color: white;
  position: relative;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 80vw;
    background-image: url('${props => props.backgroundImage}');
    background-position: center;
    background-size: cover;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 42vw;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

function CustomSlide(props) {
  const { backgroundImage } = props;

  return (
    <Layout backgroundImage={backgroundImage}>
      <Img src={backgroundImage} />
    </Layout>
  );
}

CustomSlide.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default CustomSlide;
