import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Data = styled.div`
  flex: 1;
  display: flex;
`

const Group = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`

const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.3em 0;
`

const Label = styled.label`
  text-indent: ${props => props.indent || '1em'};
`

const Input = styled.input`
  flex: 1;
  border: 1px solid ${props => props.theme.color.grey};
  border-radius: 1.5em;
  padding: 1em;
  background: #F2F2F2;
  font-family: inherit;
  font-size: 0.8em;
`

const TextArea = styled.textarea`
  flex: 1;
  resize: none;
  border: 1px solid ${props => props.theme.color.grey};
  border-radius: 3em / 45%;
  padding: 0.5em 2.5em;
  background: #F2F2F2;
  font-family: inherit;
  font-size: 0.8em;
`

const Button = styled.button`
  align-self: center;
  width: 15%;
  border-radius: 0.4em;
  border: 0;
  margin-top: 1em;
  padding: 0.5em;
  background: ${props => props.theme.color.lightBlue};
  color: ${props => props.theme.color.white};
  font-weight: inherit;
  font-size: 1.3em;
  cursor: pointer;
`

class ContactForm extends Component {
  state = {
    messageSent: false,
    name: '',
    phone: '',
    email: '',
    comments: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <Form>
        <Data>
          <Group flex='1'>
            <Field>
              <Label>Nombre</Label>
              <Input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
            </Field>
            <Field>
              <Label>Teléfono</Label>
              <Input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
            </Field>
            <Field>
              <Label>Correo electrónico</Label>
              <Input type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
            </Field>
          </Group>
          <Group flex='1.2'>
            <Field>
              <Label indent='2em'>Comentarios</Label>
              <TextArea name='comments' value={this.state.value} onChange={this.handleChange}/>
            </Field>
          </Group>
        </Data>
        <Button><p>Enviar</p></Button>
      </Form>
    )
  }
}

export default ContactForm;
