import React from 'react';

import Section from '../Section';
import Statements from './Statements';

const CustomSection = Section.extend`
  flex-direction: column;
`;

function Activities ({innerRef}) {
  return (
    <CustomSection innerRef={innerRef} fluid>
      <Statements />
    </CustomSection>
  )
}

export default React.forwardRef((props, ref) => <Activities innerRef={ref} {...props} />);

