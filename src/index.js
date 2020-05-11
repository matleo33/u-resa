import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Profile from "./Components/Profile"
import Connexion from "./Components/Connexion"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const NoMatchPage = () => {
  return (
    <div class="notFound">
      <h3 >404 - Not found</h3>
    </div>

  );
};

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


