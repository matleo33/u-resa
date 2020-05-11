import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profil from "./profil"
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

const NoMatchPage = () => {
  return (
    <div class="notFound">
    <h3 >404 - Not found</h3>
    </div>

  );
};

const Root = () => (
  <Switch>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/u-resa/" component={App}></Route>
    <Route exact path="/u-resa/Profil" component={Profil}></Route>
    <Route component={NoMatchPage}></Route>
  </Switch>
);

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Root />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


