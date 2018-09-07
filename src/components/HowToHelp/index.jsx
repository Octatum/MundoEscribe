import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ReactModal from 'react-modal';

import Section from './../Section';
import SectionBanner from './../SectionBanner';
import Donations from './Donations';
import Volunteers from './Volunteers';
import Products from './Products';
import Events from './Events';

import imageA from './assets/donations-logo.svg';
import imageB from './assets/volunteers-logo.svg';
import imageC from './assets/products-logo.svg';
import imageD from './assets/events-logo.svg';

const Modal = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      closeTimeoutMS={300}
      {...props}
    />
  )
}

const CustomSection = Section.extend`
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
`

const Header = styled.h2`
  font-size: 4em;
  padding: 0.5rem;
  text-align: center;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
  color: ${props => props.theme.color.white};

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Square = styled.div`
  position: relative;
  height: 8em;
  width: 8em;
  margin: 0 1em;
  text-align: center;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  cursor: pointer;

  :hover {
    box-shadow: 0 0 10px ${props => props.theme.color.gray};
  }
`

const SquarePicture = styled.img`
  max-height: 3em;
  max-width: 4em;
  padding: 1.5em;
`

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.2em;
`

const InformBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3em 0;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;
  border: 1px solid ${props => props.theme.color.white};
  border-radius: 10px;
  margin-bottom: 0.5em;
  background: ${props => props.theme.color.lightBlue};
`

const ButtonText = styled.p`
  font-size: ${props => props.size || '1em'};
`

const StyledModal = styled(Modal)`
  &__overlay, &__content {
    z-index: 2;
    opacity: 0;
    transition: all 0.3s;

    &.ReactModal__Content--after-open, &.ReactModal__Overlay--after-open {
      opacity: 1;
    }

    &.ReactModal__Content--before-close, &.ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__content {
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    background: #fff;
    box-shadow: 0 0 10px -2px ${props => props.theme.color.black};
    overflow: auto;
    outline: none;
  }
`

const content = [{
  text: 'Donativos',
  image: imageA,
  component: <Donations/>,
}, {
  text: 'Voluntariado',
  image: imageB,
  component: <Volunteers/>,
}, {
  text: 'Productos',
  image: imageC,
  component: <Products/>,
}, {
  text: 'Eventos',
  image: imageD,
  component: <Events/>,
}];

class HowToHelp extends Component {
  state = {
    showModal: false,
    modalContent: 0
  }

  openModalHandler = (index) => {
    this.setState({
      showModal: true,
      modalContent: index
    });
  }

  closeModalHandler = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <CustomSection id='howToHelp' fluid>
        <Header>¿Cómo ayudar?</Header>
        <Links>
          {content.map((item, index) => (
            <Square key={item.text} onClick={() => this.openModalHandler(index)}>
              <SquarePicture src={item.image}/>
              <SquareText>{item.text}</SquareText>
            </Square>
          ))}
        </Links>
        <StyledModal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModalHandler}
          contentLabel={content[this.state.modalContent].text}
        >
          {content[this.state.modalContent].component}
        </StyledModal>
        <SectionBanner id='informs' black>
          <Header>Informes anuales</Header>
          <Button>
            <ButtonText>Informes 2018</ButtonText>
            <ButtonText size="0.6em">(en proceso)</ButtonText>
          </Button>
        </SectionBanner>
      </CustomSection>
    )
  }
}

export default HowToHelp;
