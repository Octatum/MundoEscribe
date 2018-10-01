import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import ProjectRow from './ProjectRow';
import imageC from './assets/creativa.png';
import imageE from './assets/expresiva.png';
import imageT from './assets/terapeutica.png';
import { StaticQuery, graphql } from 'gatsby';

const CustomSection = Section.extend`
  flex-direction: column;
  text-align: center;
  margin-top: 5em;
`;

const Header = styled.h2`
  font-size: 3em;
  font-weight: bold;
`;

const Description = styled.p`
  padding: 0 5%;
  font-size: 1.2em;
  font-weight: lighter;
`;

const ProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em 0;
  padding-top: 0.5em;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 1em;
  }
`;


const Projects = ({ innerRef }) => (
  <StaticQuery 
    query={graphql`
      {
        allMarkdownRemark (filter: {frontmatter: {type: {eq: "contentList"}}}){
          edges {
            node {
              frontmatter {
                title
                type
                items
              }
            }
          }
        }
      }
    `}
    render={({allMarkdownRemark}) => {
      const nodes = allMarkdownRemark.edges.map(({node}) => ({...node}));
      const content = [
        {
          title: 'Escritura expresiva',
          bullets: nodes.filter(d => d.frontmatter.title === "contenido_escritura_expresiva")[0].frontmatter.items,
          image: imageC,
        },
        {
          title: 'Escritura creativa',
          bullets: nodes.filter(d => d.frontmatter.title === "contenido_escritura_creativa")[0].frontmatter.items,
          image: imageE,
        },
        {
          title: 'Escritura terapéutica',
          bullets: nodes.filter(d => d.frontmatter.title === "contenido_escritura_terapéutica")[0].frontmatter.items,
          image: imageT,
        },
      ];

      return (
        <CustomSection fluid innerRef={innerRef}>
          <Header>Proyectos</Header>
          <Description>
            Nuestras actividades de escritura como herramienta de vida se llevan a
            cabo en las modalidades de:
          </Description>
          <ProjectLayout>
            {content.map((project, index) => (
              <ProjectRow key={index} content={project} right={index % 2 === 0} />
            ))}
          </ProjectLayout>
        </CustomSection>
      );
    }}
  />
);

export default React.forwardRef((props, ref) => (
  <Projects innerRef={ref} {...props} />
));
