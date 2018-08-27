import React from 'react';

import Section from '../Section';
import Statements from './Statements';

const CustomSection = Section.extend`
  flex-direction: column;
`;

function Activities () {
  return (
    <Section fluid>
      <Statements />
    </Section>
  )
}

export default Activities;