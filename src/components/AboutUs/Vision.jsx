import React from 'react';

import HMVTemplate from './HMVTemplate';
import VisionImg from './assets/Vision.png';
import VisionImg2x from './assets/Vision@2x.png';
import VisionImg3x from './assets/Vision@3x.png';

const title = 'Visión';
const id = 'vision';
const content = `
Nuestra vida transcurre como el resultado de nuestro esfuerzo, pero no podemos cerrar los ojos ante el Yo y la Circunstancia nombrados por Ortega y Gasset. Yo soy yo y mi circunstancia. La suerte, destine, casualidad, coincidencia, hado o cualquiera de los términos con los que podamos nombrar el propio entorno.

No hay nada más dañino que una persona sin la posibilidad de expresar sus ideas, sueños, anhelos, temores y experiencias.

Las circunstncias de cada Yo suelen encerrar a la persona en su propia tumba, Saint Éxupery, su Self. La escritura, una botella al mar, le permite ser y saberse “comunicado”, “expresado”, “en relación”, es decir, persona en plenitud.

En una persona no expresada:
- El dolor de las experiencias se acumula.
- La rabia del enojo crece.
- La rabia del enojo crece.
- Las emociones se empalman y la claridad mental se desvanece.
`;

function Vision () {
  return <HMVTemplate
    title={title}
    id={id}
    content={content}
    imgSrc={VisionImg}
    imgSrcset={`${VisionImg2x}, ${VisionImg3x}`}
  />
}

export default Vision;
