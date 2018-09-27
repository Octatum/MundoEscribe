import React from 'react';

import HMVTemplate from './HMVTemplate';
import HistoryImg from './assets/History.png';
import HistoryImg2x from './assets/History@2x.png';
import HistoryImg3x from './assets/History@3x.png';
import { StaticQuery, graphql } from 'gatsby';

const title = 'Historia';
function History({ innerRef }) {
  return (
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { title: { eq: "contenido_historia" } }) {
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
            imgSrc={HistoryImg}
            imgSrcset={`${HistoryImg2x}, ${HistoryImg3x}`}
          />
        );
      }}
    />
  );
}

export default History;
