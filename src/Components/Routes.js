import React from 'react';
import Home from "./Home"
import { Route, Switch } from "react-router-dom"
import Profile from "./Profile"
import Connexion from "./Connexion"
import CGU from './CGU';
import Reservation from './RechercheEtReservation';
import Plan from "./Plan"
import ErrorPage from "./404NotFound"
import Historesas from "./HistoEtResas"


export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile
    };
  }

  render() {
    return <Switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/" render={(props) => <Reservation {...props} profile={this.state.profile} />} />
      <Route exact path="/u-resa/" render={(props) => <Reservation {...props} profile={this.state.profile} />} />
      <Route exact path="/u-resa/Profile" render={(props) => <Profile {...props} profile={this.state.profile} />} />
      <Route exact path="/u-resa/Connexion" component={Connexion}></Route>
      <Route exact path="/u-resa/CGU" component={CGU}></Route>
      <Route exact path="/u-resa/RechercheEtReservation" render={(props) => <Reservation {...props} profile={this.state.profile} />} />
      <Route exact path="/u-resa/Plan" component={Plan}></Route>
      <Route exact path="/u-resa/HistoEtResas" render={(props) => <Historesas {...props} profile={this.state.profile} />} />
      <Route component={ErrorPage}></Route>
    </Switch>
  }
}