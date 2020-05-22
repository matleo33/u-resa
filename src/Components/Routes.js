import React from 'react';
import Home from "./Home"
import { Route, Switch } from "react-router-dom"
import Profile from "./Profile"
import Connexion from "./Connexion"
import About from './About';
import Reservation from './Reservation';
import Plan from "./Plan"
import ErrorPage from "./404NotFound"

export default class Routes extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/" component={Reservation}></Route>
      <Route exact path="/u-resa/" component={Reservation}></Route>
      <Route exact path="/u-resa/Profile" component={Profile}></Route>
      <Route exact path="/u-resa/Connexion" component={Connexion}></Route>
      <Route exact path="/u-resa/About" component={About}></Route>
      <Route exact path="/u-resa/Reservation" component={Reservation}></Route>
      <Route exact path="/u-resa/Plan" component={Plan}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  }
}