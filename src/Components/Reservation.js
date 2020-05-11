import React from 'react';
import "../CSS/Reservation.css"
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Select } from 'semantic-ui-react'

const Université = [
    { key: 'af', value: 'af', text: 'Bordeux 1 le 100' },
    { key: 'ax', value: 'ax', text: 'montaigne ptdr' },
    { key: 'al', value: 'al', text: 'wesh la zone' },
  ]

const Reservation = () => (
  <div>
    <section class="container-fluid reserv">
        <div class="ReservationFirst">
            <h2> Mes réservations </h2>
            <hr class="separator"></hr>
            <div id="titi">
                    <Link to="/u-resa/"><Button secondary>Historique</Button></Link>
            </div>
        </div>
        <div class="TakeReservation">
            <h2> Prendre une réservation </h2>
            <hr class="separator"></hr>
            <div id="listD">
            <Select  className="listD" placeholder='Select your country' options={Université} />
            </div>
        </div>
    </section>
  </div>
)

export default Reservation;




