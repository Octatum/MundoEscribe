import React from 'react';

import Section from '../Section';
import Statements from './Statements';

const CustomSection = Section.extend`
  flex-direction: column;
  padding-bottom: 5em;
`;

function Activities () {
  return (
    <CustomSection id='activities' fluid>
      <Statements />
    </CustomSection>
  )
}

export default Activities;
