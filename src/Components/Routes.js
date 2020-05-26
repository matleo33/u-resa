import React from 'react';
import Home from "./Home"
import { Route, Switch } from "react-router-dom"
import Profile from "./Profile"
import Connexion from "./Connexion"
import CGU from './CGU';
import Reservation from './RechercheEtReservation';
import Plan from "./Plan"
import ErrorPage from "./404NotFound"
import Recherche from "./RechercheSalle"
import Historesas from "./HistoEtResas"


export default class Routes extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/" component={Recherche}></Route>
      <Route exact path="/u-resa/" component={Recherche}></Route>
      <Route exact path="/u-resa/Profile" component={Profile}></Route>
      <Route exact path="/u-resa/Connexion" component={Connexion}></Route>
      <Route exact path="/u-resa/CGU" component={CGU}></Route>
      <Route exact path="/u-resa/RechercheEtReservation" component={Reservation}></Route>
      <Route exact path="/u-resa/Plan" component={Plan}></Route>
      <Route exact path="/u-resa/RechercheSalle" component={Recherche}></Route>
      <Route exact path="/u-resa/HistoEtResas" component={Historesas}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  }
}