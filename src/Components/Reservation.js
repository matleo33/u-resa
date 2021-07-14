import React from 'react';
import "../CSS/Reservation.css"
import Recherche from './RecherchEtReservations_components/recherche';
import Reserver from './RecherchEtReservations_components/reserver';
import * as db_access from './RecherchEtReservations_components/db_access';



export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.DateChange = this.DateChange.bind(this);
        this.HoraireChange = this.HoraireChange.bind(this);
        this.FacChange = this.FacChange.bind(this);
        this.BatimentChange = this.BatimentChange.bind(this);
        this.SalleChange = this.SalleChange.bind(this);
        this.Dureechange = this.Dureechange.bind(this);
        this.testErreur = this.testErreur.bind(this);
        this.handleResa = this.handleResa.bind(this);
        this.state = {
            Error: "erreur",
            DateJour: Date(),
            Date: "",
            Horaire: "",
            Duree: "",
            Fac: "",
            Batiment: "",
            nomSalle: "",
            idSalle: "",
            response: [],
            CGU: -1,
            profile: props.profile,
            erreurTextDate: "",
            erreurTextHoraire: "",
            erreurTextFac: "",
            erreurTextBatiment: "",
            erreurTextSalle: "",
            erreurTextDuree: "",
            salles: [],
            batiments: [],
            sites: [],
            horaireReservable: [],
            dureeReservable: []
        }
    };



    testErreur(event) {
        event.preventDefault()
        let today = new Date()
        let date = today.getFullYear() + "-0" + parseInt(today.getMonth() + 1) + "-" + today.getDate()
        if (parseInt(today.getMonth() + 1) >= 10) {
            date = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate()
        }
        if (this.state.Date === this.state.DateJour) {
            this.setState({
                Error: "erreurVisible",
                erreurTextDate: "*Champ non renseigné."
            })
        }
        else if (this.state.Horaire === "") {
            this.setState({
                Error: "erreurVisible",
                erreurTextHoraire: "*Champ non renseigné."
            })
        }
        else if (this.state.Duree === "") {
            this.setState({
                Error: "erreurVisible",
                erreurTextDuree: "*Champ non renseigné."
            })
        }
        else if (this.state.Fac === "") {
            this.setState({
                Error: "erreurVisible",
                erreurTextFac: "*Champ non renseigné."
            })
        }
        else if (this.state.Batiment === "") {
            this.setState({
                Error: "erreurVisible",
                erreurTextBatiment: "*Champ non renseigné."
            })
        }
        else if (this.state.idSalle === "") {
            this.setState({
                Error: "erreurVisible",
                erreurTextSalle: "*Champ non renseigné."
            })
        }
        else if (this.state.Date < date) {
            this.setState({
                Error: "erreurVisible",
                erreurTextDate: "*Veuillez saisir une date qui n'est pas dans le passé."
            })
        }
        else if (this.state.Horaire === "Aucune préférence" && this.state.idSalle === 0) {
            this.setState({
                Error: "erreurVisible",
            })
        }
        else {
            const data = this.state;
            db_access.resultat(data, this);
        }
    }

    handleResa(event) {
        db_access.handleReservation(this, event.target.id)
    }

    DateChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextDate: "",
            Date: event.target.value
        });
    }

    HoraireChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextHoraire: "",
            Horaire: event.target.value
        });
    }

    Dureechange(event) {
        this.setState({
            Error: "erreur",
            erreurTextHoraire: "",
            Duree: event.target.value
        })
    }

    FacChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextFac: "",
            Fac: event.target.value
        });
    }

    BatimentChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextBatiment: "",
            Batiment: event.target.value,
        });
        if (db_access.countSalle(this.state.salles, event.target.value)) {
            this.setState({
                erreurTextSalle: "",
                nomSalle: "Aucune préférence",
                idSalle: "0"
            });
        }
    }

    SalleChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextSalle: "",
            nomSalle: event.target.textContent,
            idSalle: event.target.value
        });
    }

    componentDidMount() {
        db_access.loadreferentiel(this);
    }

    render() {
        return <div className="TakeReservation">
            <Recherche Error={this.state.Error}
                erreurTextDate={this.state.erreurTextDate}
                erreurTextHoraire={this.state.erreurTextHoraire}
                erreurTextDuree={this.state.erreurTextDuree}
                erreurTextFac={this.state.erreurTextFac}
                erreurTextBatiment={this.state.erreurTextBatiment}
                erreurTextSalle={this.state.erreurTextSalle}
                salles={this.state.salles}
                batiments={this.state.batiments}
                Batiment={this.state.Batiment}
                Fac={this.state.Fac}
                sites={this.state.sites}
                horaireReservable={this.state.horaireReservable}
                dureeReservable={this.state.dureeReservable}
                response={this.state.response}
                profile={this.state.profile}
                handleError={this.testErreur}
                DateChange={this.DateChange}
                HoraireChange={this.HoraireChange}
                FacChange={this.FacChange}
                BatimentChange={this.BatimentChange}
                SalleChange={this.SalleChange}
                Dureechange={this.Dureechange} />
            {this.state.response.length !== 0 && <Reserver response={this.state.response}
                Horaire={this.state.Horaire}
                Duree={this.state.Duree}
                handleResa={this.handleResa}
            />
            }
        </div>
    }
}
