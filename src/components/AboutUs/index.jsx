import React from 'react';
import General from './General';
import History from './History';
import Mision from './Mision';
import Vision from './Vision';
import CollageQuote from './CollageQuote';

function QuienesSomos () {
  return (
    <div id='about'>
      <General />
      <History />
      <Mision />
      <Vision />
      <CollageQuote />
    </div>
  )
}

export default QuienesSomos;
