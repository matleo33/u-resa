import React from 'react';
import './profil.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Profil = () => (
    <div>
        <div class="accueilBTN">
        <Link to="/"><Button primary>Retour a l'accueil</Button></Link>
        </div>
        <div class="profilCard">
        <Card>
            <Image src='https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p240x240/69733501_10216927294193774_169972699379007488_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=wPZc_aqRDk8AX_i0PG5&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=933ff4e4be69f5f743a5ba94da8254cb&oe=5EDF8E57' wrapped ui={false} />
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
            <p>
                <Icon name='university' />
                Université de bordeaux
            </p>
            </Card.Content>
            <Card.Content extra>
            <a href="https://www.facebook.com/mleothaud">
                <Icon name='facebook' />
                mleothaud
            </a>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends non je déconne il a pas d'ami
            </a>
            </Card.Content>
        </Card>
        </div>
    </div>

  )

export default Profil;