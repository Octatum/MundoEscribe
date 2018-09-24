import React from 'react';

import HMVTemplate from './HMVTemplate';
import HistoryImg from './assets/History.png';
import HistoryImg2x from './assets/History@2x.png';
import HistoryImg3x from './assets/History@3x.png';

const title = "Historia";
const id = "history";
const content = `
Desde 2011, sus fundadores promueven la escritura creativa, el lenguaje y la literatura, por lo que la fundación es ideada de la observación de beneficios y transformaciones que emergen de una persona que escribe.

En 2017 la Fundación El mundo escribe fue constituida bajo la premisa de que no existe nada más triste, peligroso y desolador que una persona sin la capacidad de expresar su propia voz, sus ideas, sueños y creaciones.

El mundo escribe abre la puerta a la imaginación creativa para transformar el interior de la persona, ampliar sus horizontes, por lo tanto, mejorar su bienestar y calidad de vida, independientemente de las circunstancias en las que vive. Cientos de niños, jóvenes, adultos y adultos mayores, son acompañados para integrar el hábito de la escritura en su vida.

Escribir para entender y avanzar.
`;

function History () {
  return <HMVTemplate
    title={title}
    id={id}
    content={content}
    imgSrc={HistoryImg}
    imgSrcset={`${HistoryImg2x}, ${HistoryImg3x}`}
  />
}

export default History;
