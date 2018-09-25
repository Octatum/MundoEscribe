import React from 'react';
import General from './General';
import History from './History';
import Mision from './Mision';
import Vision from './Vision';
import CollageQuote from './CollageQuote';

function QuienesSomos(props) {
  const {
    innerRef,
    historyRef,
    misionRef,
    visionRef,
    iconClickHandler,
  } = props;

  return (
    <div ref={innerRef}>
      <General iconClickHandler={iconClickHandler} />
      <History innerRef={historyRef} />
      <Mision innerRef={misionRef} />
      <Vision innerRef={visionRef} />
      <CollageQuote />
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <QuienesSomos innerRef={ref} {...props} />
));
