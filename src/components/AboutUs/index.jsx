import React from 'react';
import General from './General';
import History from './History';
import Mision from './Mision';
import Vision from './Vision';
import CollageQuote from './CollageQuote';

function QuienesSomos () {
  return (
    <React.Fragment>
      <General />
      <History />
      <Mision />
      <Vision />
      <CollageQuote />
    </React.Fragment>
  )
}

export default QuienesSomos;