import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../utils/breakpoints';
import Section from './../Section';
import ProjectRow from './ProjectRow';
import imageC from './assets/creativa.png';
import imageE from './assets/expresiva.png';
import imageT from './assets/terapeutica.png';

const CustomSection = Section.extend`
  flex-direction: column;
  text-align: center;
  margin-top: 5em;
  margin-bottom: 5em;
`

const Header = styled.h2`
  font-size: 3em;
  font-weight: bold;
  padding-bottom: 0.1rem;
`

const Description = styled.p`
  padding: 0 5%;
  font-weight: lighter;
`

const ProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 1em;
  }
`

const content = [{
  title: "Escritura expresiva",
  bullets: [
    "Centros de readaptación social",
    "Casas de migrantes",
    "Orfanatos y asilos",
    "Lugares marginados"
  ],
  image: imageC
}, {
  title: "Escritura creativa",
  bullets: [
    "Instituciones educativas",
    "Espacios públicos",
    "Bilbiotecas",
    "Apoyo a talentos emergentes"
  ],
  image: imageE
}, {
  title: "Escritura terapéutica",
  bullets: [
    "Hospitales",
    "Centros de apoyo a la mujer",
    "Necesidades especiales"
  ],
  image: imageT
}];

const Projects = () => (
  <CustomSection id='projects' fluid>
    <Header>Proyectos</Header>
    <Description>Nuestras actividades de escritura como herramienta de vida se llevan a cabo en las modalidades de:</Description>
    <ProjectLayout>
      {content.map((project, index) => (
        <ProjectRow key={index} content={project} right={index % 2 === 0}/>
      ))}
    </ProjectLayout>
  </CustomSection>
);

export default Projects;
