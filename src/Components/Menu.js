import React from 'react';
import { Link } from 'react-router-dom'
import  "../CSS/Menu.css"

const Home = () => (
  <div>
      <header class="container-fluid MenuHeader">
          <div>
            <a href="#" class="logo">U-RESA</a>
            <nav class="menu">
              <Link to="/reservation"> Réservation </Link>
              <Link to="/profil"> Mon profil </Link>
              <Link to="/about">A propos</Link> 
            </nav>
      
          </div>
        </header>
  </div>

)

export default Home;