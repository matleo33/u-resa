import React from 'react';
import "../CSS/Reservation.css"
import { Select } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Université = [
  { key: 'af', value: 'af', text: 'Université de Talence' },
  { key: 'ax', value: 'ax', text: 'Université de Pessac' },
  { key: 'al', value: 'al', text: 'Université de Vicoire' },
]

const Batiment = [
  { key: 'af', value: 'af', text: 'A21' },
  { key: 'ax', value: 'ax', text: 'A22' },
  { key: 'al', value: 'al', text: 'A29' },
]

const Salle = [
  { key: 'a', value: 'a', text: 'Aucune préférence' },
  { key: 'af', value: 'af', text: '101' },
  { key: 'ax', value: 'ax', text: '102' },
  { key: 'ap', value: 'ap', text: '105' },
]

const Duree = [
  { key: 'af', value: '1', text: '30 min' },
  { key: 'ax', value: '2', text: '1H' },
  { key: 'ap', value: '3', text: '1H 30 min' },
  { key: 'al', value: '4', text: '2H' },
  { key: 'ar', value: '5', text: '2H 30 min' },
  { key: 'am', value: '6', text: '3H' },
  { key: 'an', value: '7', text: '3H 30 min' },
  { key: 'ao', value: '8', text: '4H' },
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
    this.testErreur = this.testErreur.bind(this)
    this.EnvoieDonnee = this.EnvoieDonnee.bind(this);


    this.state = {
      Error: "erreur",
      Date: "",
      Horaire: "",
      Fac: "",
      Batiment: "",
      Salle: "",
      Duree: "",
      FindErreur: false,
      profile: props.profile
    };
  }

  EnvoieDonnee() {
    let data = [
      {
        Date: this.state.Date,
        Horaire: this.state.Horaire,
        Fac: this.state.Fac,
        Batiment: this.state.Batiment,
        Salle: this.state.Salle,
        Duree: this.state.Duree,
      }
    ]

    this.props.history.push({
      pathname: '/u-resa/RechercheEtReservation',
      data: data
    })
  }

  testErreur(event) {
    event.preventDefault()
    if (this.state.Duree === "" ||
      this.state.Date === "" ||
      this.state.Horaire === "" ||
      this.state.Fac === "" ||
      this.state.Batiment === "" ||
      this.state.Salle === "") {
      this.setState({
        Error: "erreurVisible",
      })
    }

    else if (this.state.Horaire === "Aucune préférence" && this.state.Salle === "Aucune préférence") {
      this.setState({
        Error: "erreurVisible",
      })
    }
    else { this.EnvoieDonnee() }
  }

  DateChange(event) {
    this.setState({ Date: event.target.value });
  }


  HoraireChange(event) {
    this.setState({ Horaire: event.target.textContent });
  }

  FacChange(event) {
    this.setState({ Fac: event.target.textContent });
  }

  BatimentChange(event) {
    this.setState({ Batiment: event.target.textContent });
  }

  SalleChange(event) {
    this.setState({ Salle: event.target.textContent });
  }

  render() {

    return <div>
      <section className="container-fluid reserv">
        <div className="TakeReservation">
          <h2> Rechercher et réserver une salle </h2>
          <hr className="separator"></hr>
          <form className="reservForm" onSubmit={this.testErreur}>
            <p id="erreur_Date" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Date de ma réservation : </p>
            <input type="date" className="listD" id="start" name="trip-start" onChange={this.DateChange} />
            <p id="erreur_Heure" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Heure de ma réservation : </p>
            <Select className="listD" placeholder='Aucune préférence' options={Horaire} onChange={this.HoraireChange} />
            <p id="erreur_Heure" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Durée de ma réservation : </p>
            <Select className="listD" placeholder='Aucune préférence' options={Duree} onChange={(e, { value }) => this.setState({ Duree: value })} />
            <p id="erreur_University" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Mon Université :  </p>
            <Select className="listD" placeholder='Sélectionnez mon université' options={Université} onChange={this.FacChange} />
            <p id="erreur_Batiment" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Batiment désiré : </p>
            <Select id="email" name="email" htmlFor="email" className="listD" placeholder='Sélectionnez le batiment' options={Batiment} onChange={this.BatimentChange} />
            <p id="erreur_Salle" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Salle : </p>
            <Select className="listD" placeholder='Sélectionnez la salle' options={Salle} onChange={this.SalleChange} />
            <div className="ReservationBtn">
              <Button primary>Réserver</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  }
}




