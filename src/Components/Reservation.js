import React from 'react';
import "../CSS/Reservation.css"
import { Button, Checkbox } from 'semantic-ui-react'
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

export default class Reservation extends React.Component {
  render() {
    return <div>
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
          <form class="reservForm">
            <p class="listTitre"> Date de ma réservation : </p>
            <input type="date" class="listD" id="start" name="trip-start" />
            <p class="listTitre"> Heure de ma réservation : </p>
            <Select className="listD" placeholder='Aucune préférence' options={Horaire} />
            <p class="listTitre"> Mon Université :  </p>
            <Select className="listD" placeholder='Sélectionnez mon université' options={Université} />
            <p class="listTitre"> Batiment désiré : </p>
            <Select className="listD" placeholder='Sélectionnez le batiment' options={Batiment} />
            <p class="listTitre"> Salle : </p>
            <Select className="listD" placeholder='Sélectionnez la salle' options={Salle} />
            <div>
              <input id="CheckboxCGU1" name="CheckboxCGU1" type="checkbox" value="Admin" class="checkCGU" />
              <label for="Checkbox1">J'ai lu et compris <a href="http://localhost:3000/u-resa/About">les CGU</a></label>
            </div>
            <div>
              <input id="CheckboxCGU1" name="CheckboxCGU1" type="checkbox" value="Admin" class="checkCGU" />
              <label for="Checkbox1">J'ai lu et compris <a href="http://localhost:3000/u-resa/About">les CGU 2eme partie</a></label>
            </div>
            <div class="ReservationBtn">
              <Button primary >Réserver</Button>
            </div>
          </form>

        </div>
      </section>
    </div>
  }
}




