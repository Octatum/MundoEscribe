import React from 'react';
import General from './General';
import History from './History';
import Mision from './Mision';
import Vision from './Vision';

function QuienesSomos () {
  return (
    <React.Fragment>
      <General />
      <History />
      <Mision />
      <Vision />
    </React.Fragment>
  )
}

export default QuienesSomos;