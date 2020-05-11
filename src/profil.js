import React from 'react';
import './profil.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const Profil = () => (
    <div class="profilCard">
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Mathieu</Card.Header>
          <Card.Meta>
            <span className='date'>Test lib semantic ui react</span>
          </Card.Meta>
          <Card.Description>
            Leothaud la salope
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends non je déconne il a pas d'ami
          </a>
        </Card.Content>
      </Card>
      <p>tesssst</p>
    </div>

  )

export default Profil;