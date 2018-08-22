import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  color: white;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const SlideData = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  flex-direction: column;
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

function CustomSlide (props) {
  const {title, buttonText, buttonUrl, backgroundImage} = props;

  return (
    <Layout>
      <Img src={backgroundImage} />
      <SlideData>
        <SlideTitle>{title}</SlideTitle>
        <LinkButton href={buttonUrl}>{buttonText}</LinkButton>
      </SlideData>
    </Layout>
  )
}

CustomSlide.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default CustomSlide;