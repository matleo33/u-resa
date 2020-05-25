import React from 'react';
import "../CSS/Reservation.css"
import { Select } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

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

  constructor(props) {
    super(props);
    this.DateChange = this.DateChange.bind(this);
    this.HoraireChange = this.HoraireChange.bind(this);
    this.FacChange = this.FacChange.bind(this);
    this.BatimentChange = this.BatimentChange.bind(this);
    this.SalleChange = this.SalleChange.bind(this);
    this.test = this.test.bind(this)
    this.state = {
      Error: "erreur",
      Date: "",
      Horaire: "",
      Fac: "",
      Batiment: "",
      Salle: "",
    };
  }

  test(event) {
    event.preventDefault()
    if(this.state.Date === "" || this.state.Horaire === "" || this.state.Fac === "" || this.state.Batiment === "" || this.state.Salle === ""){
      this.setState({
        Error: "erreurVisible"
      })
    }
  }

  DateChange(event) {
    this.setState({Date: event.target.value});
  }

  HoraireChange(event) {
    this.setState({Horaire: event.target.textContent});
  }

  FacChange(event) {
    this.setState({Fac: event.target.textContent});
  }

  BatimentChange(event) {
    this.setState({Batiment: event.target.textContent});
  }

  SalleChange(event) {
    this.setState({Salle: event.target.textContent});
  }


  toggleChange = (e) => {
    e.preventDefault();
    window.location = './RechercheEtReservation';
  }

  

  render() {

    return <div>
      <section class="container-fluid reserv">
        <div class="TakeReservation">
          <h2> Rechercher et réserver une salle </h2>
          <hr class="separator"></hr>
          <form class="reservForm">
          <p id="erreur_Date"class={this.state.Error}>*Champ non renseigné</p>
            <p class="listTitre"> Date de ma réservation : </p>
            <input type="date" class="listD" id="start" name="trip-start" onChange={this.DateChange} />
            <p id="erreur_Heure" class={this.state.Error}>*Champ non renseigné</p>
            <p class="listTitre"> Heure de ma réservation : </p>
            <Select className="listD" placeholder='Aucune préférence' options={Horaire} onChange={this.HoraireChange}/>
            <p id="erreur_University" class={this.state.Error}>*Champ non renseigné</p>
            <p class="listTitre"> Mon Université :  </p>
            <Select className="listD" placeholder='Sélectionnez mon université' options={Université} onChange={this.FacChange}/>
            <p id="erreur_Batiment" class={this.state.Error}>*Champ non renseigné</p>
            <p class="listTitre"> Batiment désiré : </p>
            <Select className="listD" placeholder='Sélectionnez le batiment' options={Batiment} onChange={this.BatimentChange}/>
            <p id="erreur_Salle" class={this.state.Error}>*Champ non renseigné</p>
            <p class="listTitre"> Salle : </p>
            <Select className="listD" placeholder='Sélectionnez la salle' options={Salle} onChange={this.SalleChange} />
            <div class="ReservationBtn">
              <Button primary onClick={this.toggleChange}>Réserver</Button>
            </div>
          <button onClick={this.test}>test</button>
          </form>
        </div>
      </section>
    </div>
  }
}




