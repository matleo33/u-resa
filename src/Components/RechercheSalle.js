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
  { key: 'ap', value: 'ap', text: '105' },
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
    this.testErreur = this.testErreur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      Error: "erreur",
      Date: "",
      Horaire: "",
      Fac: "",
      Batiment: "",
      Salle: "",
      FindErreur: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.testErreur(event);
    if(this.state.FindErreur === false){
      //var data = new FormData();
      let data = [
        {Date: this.state.Date, 
        Horaire: this.state.Horaire,
        Fac: this.state.Fac,
        Batiment: this.state.Batiment,
        Salle: this.state.Salle}
      ]
      /*data.append('Date', this.state.Date);
      data.append('Horaire', this.state.Horaire);
      data.append('Fac', this.state.Fac);
      data.append('Batiment', this.state.Batiment);
      data.append('Salle', this.state.Salle);
      for(var pair of data.entries()) {
        console.log(pair[0]+ ', '+ pair[1]); 
     }*/

     this.props.history.push({
      pathname: '/u-resa/RechercheEtReservation',
      data: data // your data array of objects
    })

      /*fetch('/RechercheEtReservation', {
        method: 'POST',
        body: data,
      });
      window.location = './RechercheEtReservation';*/
    }

  }

  testErreur(event) {
    event.preventDefault()
    if(this.state.Date === "" || this.state.Horaire === "" || this.state.Fac === "" || this.state.Batiment === "" || this.state.Salle === ""){
      this.setState({
        Error: "erreurVisible",
        FindErreur: true
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

  render() {

    return <div>
      <section className="container-fluid reserv">
        <div className="TakeReservation">
          <h2> Rechercher et réserver une salle </h2>
          <hr className="separator"></hr>
          <form className="reservForm" onSubmit={this.handleSubmit}>
          <p id="erreur_Date"className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Date de ma réservation : </p>
            <input type="date" className="listD" id="start" name="trip-start" onChange={this.DateChange} />
            <p id="erreur_Heure" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Heure de ma réservation : </p>
            <Select className="listD" placeholder='Aucune préférence' options={Horaire} onChange={this.HoraireChange}/>
            <p id="erreur_University" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Mon Université :  </p>
            <Select className="listD" placeholder='Sélectionnez mon université' options={Université} onChange={this.FacChange}/>
            <p id="erreur_Batiment" className={this.state.Error}>*Champ non renseigné</p>
            <p className="listTitre"> Batiment désiré : </p>
            <Select id="email" name="email" htmlFor="email" className="listD" placeholder='Sélectionnez le batiment' options={Batiment} onChange={this.BatimentChange}/>
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




