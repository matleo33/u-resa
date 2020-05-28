import React from 'react';
import { Link } from 'react-router-dom'
import "../CSS/Menu.css"

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
  }
}
