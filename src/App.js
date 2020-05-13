import React from 'react';
import Home from "./Components/Home"
import { Route, Switch } from "react-router-dom"
import Profile from "./Components/Profile"
import Connexion from "./Components/Connexion"
import Menu from "./Components/Menu"
import About from './Components/About';
import Reservation from './Components/Reservation';

const NoMatchPage = () => {
  return (
    <div class="notFound">
      <h3 >404 - Not found</h3>
    </div>

  );
};

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/u-resa/" component={Home}></Route>
    <Route exact path="/u-resa/Profile" component={Profile}></Route>
    <Route exact path="/u-resa/Connexion" component={Connexion}></Route>
    <Route exact path="/u-resa/About" component={About}></Route>
    <Route exact path="/u-resa/Reservation" component={Reservation}></Route>
    <Route component={NoMatchPage}></Route>
  </Switch>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Root />
      </header>
    </div>
  );
}

export default App;
