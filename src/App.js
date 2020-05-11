import React from 'react';
import Home from "./Components/Home"
import { Route, Switch } from "react-router-dom"
import Profile from "./Components/Profile"
import Menu from "./Components/Menu"

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
