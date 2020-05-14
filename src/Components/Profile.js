import React, { Component } from 'react';
import '../CSS/profil.css';
import { Card, Icon, Image, Accordion, Grid } from 'semantic-ui-react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

export default class Profile extends React.Component {
  state = { activeIndex: 0 }
  constructor(props) {
    super(props);

  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div class="ProfilStyle">
        <div class="ProfilImg">
          <Image src='https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p240x240/69733501_10216927294193774_169972699379007488_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=wPZc_aqRDk8AX_i0PG5&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=933ff4e4be69f5f743a5ba94da8254cb&oe=5EDF8E57' size='medium' circular />
        </div>
        <div class="ProfilInfo">
          <Accordion styled fluid>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
          Contactez-nous
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <Form>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@gmail.com'
    />
        <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Objet'
      placeholder='Objet du message'
    />
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'
      placeholder='Message'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Envoyer'
    />
  </Form>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
          Info 2
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Leothaud
          </p>
            </Accordion.Content>

            <Accordion.Title active={1}>

          Info 3

        </Accordion.Title>

          </Accordion>
        </div>

      </div>

    )
  }
}
