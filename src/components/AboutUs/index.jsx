import React from 'react';
import General from './General';
import History from './History';
import Mision from './Mision';
import Vision from './Vision';
import CollageQuote from './CollageQuote';

function QuienesSomos ({innerRef}) {
  return (
    <div ref={innerRef} >
      <General />
      <History />
      <Mision />
      <Vision />
      <CollageQuote />
    </div>
  )
}

export default React.forwardRef((props, ref) => <QuienesSomos innerRef={ref} {...props} />);
