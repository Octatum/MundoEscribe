import React from 'react';

import HMVTemplate from './HMVTemplate';
import MisionImg from './assets/Mision.png';
import MisionImg2x from './assets/Mision@2x.png';
import MisionImg3x from './assets/Mision@3x.png';

const title = "Misión";
const id = 'mision';
const content = `
Somos una fundación que promueve la escritura como herramienta de vida, desde la infancia y para siempre.

Toda persona tiene derecho a conocer, replantear, crear y vivir su propia historia; la escritura es una herramienta simple y útil siempre.
`;

function Mision () {
  return <HMVTemplate
    title={title}
    id={id}
    content={content}
    imgSrc={MisionImg}
    imgSrcset={`${MisionImg2x}, ${MisionImg3x}`}
    reverse
  />
}

export default Mision;
