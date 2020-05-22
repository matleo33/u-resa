import React from 'react';
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import Routes from "./Components/Routes"

function App() {
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

export default App;
