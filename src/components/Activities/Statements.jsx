import React from 'react';
import styled from 'styled-components';

import SectionBanner from './../SectionBanner';
import logo from '../assets/blue-logo.svg';

const Layout = styled.div`
  flex: 1;
  max-height: 40em;
`;

const Header = styled.h2`
  font-size: 3.5em;
  margin: 0.5em 0;
`;

const Subheader = styled.div`
  color: ${({theme}) => theme.color.black};
  text-align: center;
  margin: 0.2em 0;
`;

const StatementList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  counter-reset: listCounter;
  height: 100%;
  width: 90%;
  margin: 0 5%;
  position: relative;
`;

const StatementListRow = styled.div.attrs({
  flex: ({flex}) => flex || 1,
  flexdirection: ({reverse}) => reverse ? 'row-reverse' : 'row',
})`
  display: flex;
  flex: ${({flex}) => flex};
  flex-direction: ${({flexdirection}) => flexdirection};
`;

const SingleStatementCell = styled.div.attrs({
  flex: ({flex}) => flex || 1,
})`
  align-items: ${({alignitems}) => alignitems};
  justify-content: ${({justifycontent}) => justifycontent};
  flex: ${({flex}) => flex};
  height: 100%;
  width: 100%;
  display: flex;
`;

const CellData = styled.div.attrs({
  style: (({style}) => ({...style}))
})`
  counter-increment: listCounter;
  text-align: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  font-size: 0.9em;
  padding: 0.5rem;

  ::before {
    content: counter(listCounter) "";
    font-size: 4em;
    color: ${({theme}) => theme.color.lightBlue};
    font-weight: bold;
    margin-bottom: -1.2rem;
    margin-right: 0.1em;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({theme}) => theme.color.lightBlue};
    height: 0.2em;
    width: 100%;
  }
`;

const LogoSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LogoImage = styled.img`
  width: 8em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;

function Statements() {
  return (
    <Layout>
      <SectionBanner>
        <Header>Lo que hacemos</Header>
      </SectionBanner>
      <Subheader>Todos nuestros proyectos están encaminados a seis enunciados. Creemos y trabajamos por ello. </Subheader>
      <StatementList>
        <LogoSection>
          <LogoImage src={logo} />
        </LogoSection>
        <StatementListRow flex={2}>
          <SingleStatementCell 
            justifycontent="flex-end" 
            alignitems="flex-end" 
            flex={4}
          >
            <CellData>
              Al escribir aprendemos y nos descubrimos.
            </CellData>
          </SingleStatementCell>
          <SingleStatementCell 
            justifycontent="center" 
            alignitems="flex-start"
            flex={4}
          >
            <CellData>
              Se aprende a hacerlo
            </CellData>
          </SingleStatementCell>
          <SingleStatementCell 
            justifycontent="flex-start" 
            alignitems="flex-end" 
            flex={5}
          >
            <CellData>
              Escribir para erradicar el miedo, para reconocérnos únicos y a la vez, hermandados con todas las historias.
            </CellData>
          </SingleStatementCell>
        </StatementListRow>
        <StatementListRow flex={3} reverse>
          <SingleStatementCell 
            justifycontent="center" 
            alignitems="flex-start"
          >
            <CellData>
              Narrar para comprender, para crecer
            </CellData>
          </SingleStatementCell>
          <SingleStatementCell 
            justifycontent="flex-start" 
            alignitems="flex-end"
          >
            <CellData>
              Escribir para adueñarnos de nuestra propia voz, para caminar con la dignidad y el empoderamiento de sabernos dueños de nuestra propia historia. 
            </CellData>
          </SingleStatementCell>
          <SingleStatementCell 
            justifycontent="flex-start" 
            alignitems="flex-start"
          >
            <CellData>
              La escritura es una forma de la expresión del yo. 
            </CellData>
          </SingleStatementCell>
        </StatementListRow>
      </StatementList>
    </Layout>
  )
}

export default Statements;