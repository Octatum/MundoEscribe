import React from 'react';
import Section from './../Section';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import breakpoints from '../../utils/breakpoints';

const CustomSecton = Section.extend`
  position: relative;
  min-height: 37.5em;
  height: 100vh;
  align-items: center;
  justify-content: center;

  :not(:nth-last-child(2))::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 0.2em;
    background-image: radial-gradient(ellipse at center, #468ec0, #ffffff00 70%);
  }

  @media screen and (max-width: ${breakpoints.small}) {
    height: initial;
    padding: 4em 0;
  }
`;

const ContentLayout = styled.div`
  position: relative;
  min-height: 75%;
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
  justify-content: space-between;
  flex: 1;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentSection = styled.div`
  max-width: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 45%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  color: ${({theme}) => theme.color.lightBlue};
  font-size: 3em;
  text-align: ${({rightAlign}) => rightAlign ? 'right' : 'inherit'};

  @media screen and (max-width: ${breakpoints.small}) {
    text-align: center;
  }
`;

const Content = styled(ReactMarkdown)`
  color: ${({theme}) => theme.color.black};

  > * {
    font-size: 0.95em;
    line-height: 1.5em;
    text-align: justify;
    margin: 1.5em 0;
  }

  > ul {
    margin-top: -1em;
    margin-left: 5%;
    list-style: none;

    > li {
      line-height: inherit;
      position: relative;

      ::before {
        content: "•";
        position: absolute;
        left: -1em;
        color: ${({theme}) => theme.color.lightBlue};
      }
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 40%;

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 45%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    max-width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

function HMVTemplate ({
  title,
  id,
  content,
  imgSrc,
  imgSrcset,
  reverse
}) {
  return (
    <CustomSecton id={id}>
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
