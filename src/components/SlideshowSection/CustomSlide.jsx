import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  color: white;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 35em;
`;

function CustomSlide (props) {
  const { backgroundImage } = props;

  return (
    <Layout>
      <Img src={backgroundImage} />
    </Layout>
  )
}

CustomSlide.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default CustomSlide;