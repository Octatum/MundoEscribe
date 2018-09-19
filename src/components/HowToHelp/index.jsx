import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ReactModal from 'react-modal';

import breakpoints from '../../utils/breakpoints';
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

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 3.5em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 3em;
  }
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

  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 1em 2em 2em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 1em auto;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    margin: 0 auto 2em;
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

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 7em;
    width: 7em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    height: 8em;
    width: 8em;
    margin: 1em;
  }
`

const SquarePicture = styled.img`
  max-height: 40%;
  max-width: 50%;
  padding: 1.5em;
`

const SquareText = styled.p`
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  font-size: 1.2em;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 1em;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 1.2em;
  }
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
    z-index: 10;
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
    bottom: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &__content {
    position: fixed;
    top: 5%;
    left: 5%;
    bottom: 5%;
    right: 5%;
    background: ${props => props.theme.white};
    box-shadow: 0 0 10px -2px ${props => props.theme.color.black};
    overflow: auto;
    outline: none;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    &__content {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`

const Arrow = styled.i`
  position: fixed;
  width: 3%;
  margin: 1%
  top: 50%;
  transform: translateY(-50%);
  left: ${props => !props.right ? 0 : 'initial'};
  right: ${props => props.right ? 0 : 'initial'};
  text-align: center;
  color: ${props => props.theme.color.white};
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none !important;
  }
`

const Return = styled.div`
  position: absolute;
  bottom: 1em;
  left: 1em;
  color: ${props => props.theme.color.black};
  cursor: pointer;

  i {
    margin: 0 0.5em;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
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

  changeModalHandler = (next) => {
    let newValue = this.state.modalContent + (next ? 1 : -1);

    if (next && newValue >= content.length) {
      newValue = 0;
    } else if (!next && newValue < 0) {
      newValue = content.length - 1;
    }

    this.setState({ modalContent: newValue });
  }

  addExtraProps = (Component, extraProps) => (
    <Component.type {...Component.props} {...extraProps}/>
  )

  render() {
    const PickModal = React.cloneElement(content[this.state.modalContent].component);

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
          {this.addExtraProps(content[this.state.modalContent].component, {changeModal: this.changeModalHandler})}
          <Arrow className="fas fa-angle-left fa-3x" onClick={() => this.changeModalHandler(false)}/>
          <Arrow className="fas fa-angle-right fa-3x" onClick={() => this.changeModalHandler(true)} right/>
          <Return onClick={this.closeModalHandler}><i className="fas fa-angle-left"/>Regresar</Return>
        </StyledModal>
        <SectionBanner id='informs' dark>
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
