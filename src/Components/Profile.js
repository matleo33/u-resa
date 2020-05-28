import React from 'react';
import '../CSS/profil.css';
import { Icon, Image, Accordion } from 'semantic-ui-react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { Message, Segment } from 'semantic-ui-react'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: '',
      Object: '',
      AdresseMail: '',
      hiddenMessageOK: true,
      hiddenMessageKO: true,
      infoProfil: [],
      profile: props.profile,
      activeIndex: 0
    }
  }


  onChangeMsg(event) {
    this.setState({
      Message: event.target.value
    })

  }

  onChangeObj(event) {
    this.setState({
      Object: event.target.value
    })

  }

  onChangeMail(event) {
    this.setState({
      AdresseMail: event.target.value
    })

  }



  componentDidMount() {

    fetch('http://localhost:8080/User/2')
      .then(res => res.json())
      .then(json => {
        this.setState({
          infoProfil: json[0],
        });
        console.log("good")
      }).catch((err) => {
        console.log(err);
      });
  }



  mailClick = () => {
    fetch('http://localhost:8080/Contactus', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: this.state.AdresseMail,
        subject: this.state.Object,
        message: this.state.Message
      })
    }).then((response) => {
      if (response.status === 200) {
        console.log("ok");
        this.setState({ hiddenMessageOK: false })
        window.scrollTo(0, 0);

      }
    })
      .catch((error) => {
        console.error(error);
        this.setState({ hiddenMessageKO: false })
      });
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex, hiddenMessageOK, hiddenMessageKO } = this.state
    return (
      <div class="ProfilStyle">
        <Message positive
          hidden={hiddenMessageOK}>
          <Message.Header>Message envoyé</Message.Header>
          <p>
            Votre retour nous sera très utile pour améliorer cette application lors de sa prochaine mise à jour.
    </p>
        </Message>
        <Message negative
          hidden={hiddenMessageKO}>
          <Message.Header>Message bloqué</Message.Header>
          <p>
            Le service est momentanément intérompu. Vous pouvez cependant nous envoyer un mail à uresaprojet@gmail.com.
    </p>
        </Message>
        <div class="ProfilImg">
          <Image src='https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p240x240/69733501_10216927294193774_169972699379007488_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=wPZc_aqRDk8AX_i0PG5&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=933ff4e4be69f5f743a5ba94da8254cb&oe=5EDF8E57' size='medium' circular />
        </div>
        <div class="ProfilInfo">
          <div className="NomPrenom">{this.state.profile.prenom} {this.state.profile.nom}</div>
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
                  onChange={this.onChangeMail.bind(this)}
                  value={this.state.AdresseMail}
                />
                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Objet'
                  placeholder='Objet du message'
                  onChange={this.onChangeObj.bind(this)}
                  value={this.state.Object}
                />
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Message'
                  placeholder='Message'
                  onChange={this.onChangeMsg.bind(this)}
                  value={this.state.Message}
                />
                <Form.Field
                  id='form-button-control-public'
                  control={Button}
                  onClick={this.mailClick}
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
          Autres infos
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                {this.state.profile.prenom}
              </p>
              <p>
                {this.state.profile.nom}
              </p>
              <p>
                Niveau d'études :
              </p>
              <p>
                Section :
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
          A propos
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              Lorem Ipsum dolor sit amet
            </Accordion.Content>

          </Accordion>
        </div>

      </div>

    )
  }
}
