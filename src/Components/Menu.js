import React from 'react';
import { Link } from 'react-router-dom'
import  "../CSS/Menu.css"


const Home = () => (
  <div>
      <header class="container-fluid MenuHeader">
          <div>
            <a href="#" class="logo">U-RESA</a>
            <nav class="menu">
              <Link to="/u-resa/reservation"> Réservation </Link>
              <Link to="/u-resa/Profile"> Mon profil </Link>
              <Link to="/u-resa/about">A propos</Link>
              <Link to="/">Logout</Link>  
            </nav>
      
          </div>
        </header>
  </div>

)

export default Home;