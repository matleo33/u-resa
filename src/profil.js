import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

function Profil() {
  return (
    <div className="App">
        <button class="ui primary button">Primary</button>
        <button class="ui secondary button">Secondary</button>
    </div>
  );
}

export default Profil;