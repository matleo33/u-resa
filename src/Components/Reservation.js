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

  const Batiment = [
    { key: 'af', value: 'af', text: 'A22' },
    { key: 'ax', value: 'ax', text: 'A21' },
    { key: 'al', value: 'al', text: 'A29 évidement tu connais' },
  ]

  const Salle = [
    { key: 'af', value: 'af', text: '101' },
    { key: 'ax', value: 'ax', text: '102' },
    { key: 'ax', value: 'ax', text: '105' },
    { key: 'al', value: 'al', text: 'des profs ptdr trolol' },
  ]
  

  const Horaire = [
    { key: 'a', value: 'a', text: 'Aucune préférence' },
    { key: 'b', value: 'b', text: '8H00' },
    { key: 'c', value: 'c', text: '8H30' },
    { key: 'd', value: 'd', text: '9H00' },
    { key: 'e', value: 'e', text: '9H30' },
    { key: 'f', value: 'f', text: '10H00' },
    { key: 'g', value: 'g', text: '10H30' },
    { key: 'h', value: 'h', text: '11H00' },
    { key: 'i', value: 'i', text: '11H30' },
    { key: 'j', value: 'j', text: '12H00' },
    { key: 'k', value: 'k', text: '12H30' },
    { key: 'l', value: 'l', text: '13H00' },
    { key: 'm', value: 'm', text: '13H30' },
    { key: 'n', value: 'n', text: '14H00' },
    { key: 'o', value: 'o', text: '14H30' },
    { key: 'p', value: 'p', text: '15H00' },
    { key: 'q', value: 'q', text: '15H30' },
    { key: 'r', value: 'r', text: '16H00' },
    { key: 's', value: 's', text: '16H30' },
    { key: 't', value: 't', text: '17H00' },
    { key: 'u', value: 'u', text: '17H30' },
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
            <hr class="separator2"></hr>
        </div>

        <div class="TakeReservation">
            <h2> Prendre une réservation </h2>
            <hr class="separator"></hr>
            <div id="listD">
            <p> Date de ma réservation : <input type="date" id="start" name="trip-start" /></p>
            <p> Heure de ma réservation : <Select  className="listD" placeholder='Aucune préférence' options={Horaire} /></p>
            <p> Mon Université :  <Select  className="listD" placeholder='Sélectionnez mon université' options={Université} /></p>
            <p> Batiment désiré :  <Select  className="listD" placeholder='Sélectionnez le batiment' options={Batiment} /></p>
            <p> Salle :  <Select  className="listD" placeholder='Sélectionnez la salle' options={Salle} /></p>
            </div>
        </div>
    </section>
  </div>
)

export default Reservation;




