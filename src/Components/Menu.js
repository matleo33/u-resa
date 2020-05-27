import React from 'react';
import { Link } from 'react-router-dom'
import "../CSS/Menu.css"
import { Segment } from 'semantic-ui-react'

function BoutonConnexion(props) {
  if (props.connected) {
    return <Link onClick={() => props.connexion} to="/u-resa/Connexion">Déconnexion</Link>
  } else {
    return <Link onClick={() => props.connexion} to="/u-resa/Connexion">Connexion</Link>
  }
}

export default class MenuPerso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: props.connected,
      connexion: props.connexion
    };
  }

  render() {
    return <div>
      <header className="container-fluid MenuHeader">
        <div className="logo">
          <Link to="/u-resa/"> U-RESA </Link>

        </div>
        <hr className="separatorMenu"></hr>
        <div className="MenuLink">
          <Link className="Link" to="/u-resa/RechercheSalle"> Réserver </Link>
          <Link className="Link" to="/u-resa/HistoEtResas"> Mes réservations </Link>
          <Link className="Link" to="/u-resa/Plan">Plan</Link>
          <Link className="Link" to="/u-resa/Profile"> Mon profil </Link>
          <a className="Link" href="http://localhost:8080/Connexion">Connexion</a>

        </div>
      </header>
    </div>

    {/*
            
            <Segment.Group inverted  horizontal>
<Segment ><Link className="Link" to="/u-resa/RechercheSalle"> Réserver </Link></Segment>
<Segment ><Link className="Link" to="/u-resa/HistoEtResas"> Mes réservations </Link></Segment>
<Segment><Link className="Link" to="/u-resa/Plan">Plan</Link></Segment>
<Segment><Link className="Link" to="/u-resa/Profile"> Mon profil </Link></Segment>
<Segment><a className="Link" href="http://localhost:8080/Connexion">Connexion</a></Segment>
</Segment.Group>
            
            
            
            <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Link className="logo" to="/u-resa/"> U-RESA </Link>
              </Grid.Column>
              <Grid.Column>
                <nav className="menu">
                  <Link to="/u-resa/RechercheSalle"> Réserver </Link>
                  <Link to="/u-resa/HistoEtResas"> Mes réservations </Link>
                  <Link to="/u-resa/Plan">Plan</Link>
                  <Link to="/u-resa/Profile"> Mon profil </Link>
                  <a href="http://localhost:8080/Connexion">Connexion</a>
                </nav>
              </Grid.Column>
            </Grid.Row>
          </Grid>*/}
  }
}
