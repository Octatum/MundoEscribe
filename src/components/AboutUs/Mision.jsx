import React from 'react';

import HMVTemplate from './HMVTemplate';
import MisionImg from './assets/Mision.png';
import MisionImg2x from './assets/Mision@2x.png';
import MisionImg3x from './assets/Mision@3x.png';
import { StaticQuery, graphql } from 'gatsby';

const title = 'Misión';

function Mision({ innerRef }) {
  return (
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "contenido_mision" } }) {
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
            imgSrc={MisionImg}
            imgSrcset={`${MisionImg2x}, ${MisionImg3x}`}
            reverse
          />
        );
      }}
    />
  );
}

export default Mision;
