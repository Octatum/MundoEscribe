import React from 'react';
import Section from './../Section';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const CustomSecton = Section.extend`
  min-height: 37.5em;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ContentLayout = styled.div`
  position: relative;
  min-height: 75%;
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
  justify-content: space-between;
  flex: 1;

  ::after {
    content: "";
    position: absolute;
    bottom: -0.2em;
    left: 0; 
    right: 0;
    margin: 0 auto;
    width: 35em;
    height: 0.2em;
    background-image: radial-gradient(ellipse at center, #468ec0, #ffffff00 70%);
  }
`;

const ContentSection = styled.div`
  max-width: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  color: ${({theme}) => theme.color.lightBlue};
  font-size: 3em;
  text-align: ${({rightAlign}) => rightAlign ? 'right' : 'inherit'};
`;

const Content = styled(ReactMarkdown)`
  color: ${({theme}) => theme.color.black};
  
  > * {
    font-size: 0.85em;
    line-height: 1.5em;
    text-align: justify;
    margin: 1.5em 0;
  }

  > ul {
    margin-top: -1.5em;
    margin-left: 10%;
    list-style: none;

    > li {
      line-height: inherit;
      position: relative;

      ::before {
        content: "•";
        position: absolute;
        left: -0.5em;
        font-size: 1.5em;
        color: ${({theme}) => theme.color.lightBlue};
      }
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 40%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

function HMVTemplate ({
  title,
  content,
  imgSrc,
  imgSrcset,
  reverse
}) {
  return (
    <CustomSecton>
      <ContentLayout reverse={reverse}>
        <ContentSection>
          <Title rightAlign={reverse}>{title}</Title>
          <Content>{content}</Content>
        </ContentSection>
        <ImageSection>
          <Image src={imgSrc} srcSet={imgSrcset} />
        </ImageSection>
      </ContentLayout>
    </CustomSecton>
  )
}

HMVTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};

HMVTemplate.defaultProps = {
  reverse: false
};

export default HMVTemplate;