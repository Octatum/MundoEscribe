import React from 'react';

import HMVTemplate from './HMVTemplate';
import VisionImg from './assets/Vision.png';
import VisionImg2x from './assets/Vision@2x.png';
import VisionImg3x from './assets/Vision@3x.png';
import { graphql, StaticQuery } from 'gatsby';

const title = 'Visión';

function Vision({ innerRef }) {
  return (
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "contenido_vision" } }) {
            frontmatter {
              content
            }
          }
        }
      `}
      render={({ markdownRemark }) => {
        const { content } = markdownRemark.frontmatter;

        return (
          <HMVTemplate
            title={title}
            innerRef={innerRef}
            content={content}
            imgSrc={VisionImg}
            imgSrcset={`${VisionImg2x}, ${VisionImg3x}`}
          />
        );
      }}
    />
  );
}

export default Vision;
