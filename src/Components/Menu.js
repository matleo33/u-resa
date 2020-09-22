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
          <Link className="Link1" to="/u-resa/RechercheEtReservation"> Réserver </Link>
          <Link className="Link2" to="/u-resa/HistoEtResas"> Mes réservations </Link>
          <Link className="Link3" to="/u-resa/Plan">Plan</Link>
          <Link className="Link4" to="/u-resa/Profile"> Mon profil </Link>
          <a className="Link5" href="http://localhost:8080/Profil/Connexion">Connexion</a>

        </div>
      </header>
    </div>
  }
}
