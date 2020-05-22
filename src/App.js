import React from 'react';
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import Routes from "./Components/Routes"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <Routes />
          <Footer />
        </header>
      </div>
    );
  }
}

