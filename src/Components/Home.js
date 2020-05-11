import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
    <p>This is the HomePage</p>
    <Link className="retour" to="/u-resa/Profile"> Mon profil </Link>
  </div>

)

export default Home;