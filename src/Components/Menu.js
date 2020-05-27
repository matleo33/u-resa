import React from 'react';
import { Link } from 'react-router-dom'
import "../CSS/Menu.css"
import { Grid } from 'semantic-ui-react'

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
        <div>
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
                  <BoutonConnexion connexion={this.state.connexion} connected={this.state.connected} />
                </nav>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </header>
    </div>
  }
}