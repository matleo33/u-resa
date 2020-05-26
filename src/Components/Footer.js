import React from 'react';
import "../CSS/Footer.css"
import { Icon, Grid } from 'semantic-ui-react'

export default class Footer extends React.Component {
    render() {
        return <div class="footer">
            



            <div></div>


            <div></div>



            <Grid columns={2}>

      <Grid.Column>
          <div class="icon">
      <Icon circular name='map marker alternate' size='large'></Icon>
      <span> 351 Cours de la Libération, 33400 Talence</span>
      <div></div>
      <Icon circular name='phone' size='large'></Icon>
      <span> 05 55 55 55 55</span>
      <div></div>
      <Icon circular name='mail' size='large'></Icon>
      <span> uresa33@gmail.com </span>
      </div>
      </Grid.Column>

      <Grid.Column>
          <div class="text">
        <div>A propos de l'univesité</div>
        <div>Lorem blabla blabla blabla </div>
        <Icon circular name='facebook' size='large'></Icon>
        <span><Icon circular name='twitter' size='large'></Icon></span>
        <span><Icon circular name='linkedin' size='large'></Icon></span>
        <span><Icon circular name='mail' size='large'></Icon></span>
        </div>
      </Grid.Column>

  </Grid>

        </div>
    }
}