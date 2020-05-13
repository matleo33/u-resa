import React from 'react';
import { Link } from 'react-router-dom'
import "../CSS/Menu.css"
import { Grid } from 'semantic-ui-react'


const Home = () => (
    <div>
        <header class="container-fluid MenuHeader">
            <div>
<Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
      <Link class="logo" to="/u-resa/"> U-RESA </Link>
      </Grid.Column>
      <Grid.Column>
        
      <nav class="menu">
              <Link to="/u-resa/reservation"> Réservation </Link>
              <Link to="/u-resa/Profile"> Mon profil </Link>
              <Link to="/u-resa/About">A propos</Link>
              <Link to="/u-resa/Plan">Plan</Link>
              <a href="http://localhost:8080/Connexion">Connexion</a>
              
            </nav>
      </Grid.Column>
    </Grid.Row>

  </Grid>



      
          </div>
        </header>
  </div>

)

export default Home;