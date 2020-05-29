import React from 'react';
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import Routes from "./Components/Routes"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      profile: {
        id: 1,
        nom: "LEOTARD",
        prenom: "Mathieu",
        photo: null
      }
    };
  }

  connection() {
    this.setState({ connected: !this.state.connected });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu connection={this.connection} connected={this.state.connected} />
          <Routes profile={this.state.profile} />
          <Footer />
        </header>
      </div>
    );
  }
}

