import React from 'react';
import "../CSS/Reservation.css"
import { Button, Segment, Checkbox, Select } from 'semantic-ui-react'


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
    { key: 'a', value: '0', text: 'Aucune préférence' },
    { key: 'af', value: '1', text: '101' },
    { key: 'ax', value: '2', text: '102' },
    { key: 'ap', value: '3', text: '103' },
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
        this.handleClick = this.handleClick.bind(this);
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
            activeIndex: -1,
            CGU: -1,
            profile: props.profile,
            erreurTextDate: "",
            erreurTextHoraire: "",
            erreurTextFac: "",
            erreurTextBatiment: "",
            erreurTextSalle: "",
            erreurTextDuree: "",
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
        else if (this.state.nomSalle === "") {
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

        else if (this.state.Horaire === "Aucune préférence" && this.state.nomSalle === "Aucune préférence") {
            this.setState({
                Error: "erreurVisible",
            })
        }
        else {
            const data = this.state;
            this.resultat(data);
        }
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
            Horaire: event.target.textContent
        });
    }

    FacChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextFac: "",
            Fac: event.target.textContent
        });
    }

    BatimentChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextBatiment: "",
            Batiment: event.target.textContent
        });
    }

    SalleChange(event) {

        this.setState({
            Error: "erreur",
            erreurTextSalle: "",
            nomSalle: event.target.textContent
        });
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    handleResa = () => {
        fetch("http://localhost:8080/User/1/CGU", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(response => this.setState({ CGU: response[0]["CGU"] }, function () {
                if (this.state.CGU === 1) {
                    var str = this.state.Horaire.split("H")
                    var heuresansretenue = (Number(str[0]) + Number(Math.trunc((this.state.Duree * 30) / 60))) + 'H' + (Number(str[1]) + Number((this.state.Duree * 30) % 60))
                    var str2 = heuresansretenue.split("H")
                    var horairefin = this.state.Date + ' ' + (Number(str2[0]) + Number((Math.trunc(Number(str2[1]) / 60)))) + 'H' + (Number(str2[1]) % 60)
                    fetch("http://localhost:8080/Salles/Reserver", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            horaire: this.state.Date + ' ' + this.state.Horaire,
                            idsalle: this.state.response[this.state.activeIndex.toString()]["id_salle"],
                            duree: Number(this.state.Duree) * 30,
                            idreservant: "1",
                            horairefin: horairefin
                        })
                    })
                    let data = [
                        {
                            Date: this.state.Date,
                            Horaire: this.state.Horaire,
                            Fac: this.state.Fac,
                            Batiment: this.state.Batiment,
                            idSalle: this.state.response[this.state.activeIndex.toString()]["id_salle"],
                            nomSalle: this.state.response[this.state.activeIndex.toString()]["nomSalle"],
                            Duree: this.state.Duree,
                        }
                    ]
                    this.props.history.push({
                        pathname: '/u-resa/HistoEtResas',
                        data: data
                    })
                }
                else if (this.state.CGU === 0) {
                    let data = [
                        {
                            Date: this.state.Date,
                            Horaire: this.state.Horaire,
                            Fac: this.state.Fac,
                            Batiment: this.state.Batiment,
                            idSalle: this.state.response[this.state.activeIndex.toString()]["id_salle"],
                            nomSalle: this.state.response[this.state.activeIndex.toString()]["nomSalle"],
                            Duree: this.state.Duree,
                        }
                    ]
                    this.props.history.push({
                        pathname: '/u-resa/CGU',
                        data: data
                    })
                }
                else {
                    console.log("Erreur")
                }
            }));
    }

    resultat(data) {
        var str = data["Horaire"].split("H")
        var heuresansretenue = (Number(str[0]) + Number(Math.trunc((data["Duree"] * 30) / 60))) + 'H' + (Number(str[1]) + Number((data["Duree"] * 30) % 60))
        var str2 = heuresansretenue.split("H")
        var heure = data["Date"] + ' ' + (Number(str2[0]) + Number((Math.trunc(Number(str2[1]) / 60)))) + 'H' + (Number(str2[1]) % 60)
        if (data["Horaire"] === "Aucune préférence") {
            fetch("http://localhost:8080/Salles/Disponibilitesalle", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: data["Date"],
                    idsalle: data["nomSalle"]
                })
            }).then(response => response.json())
                .then(response => this.setState({ response: response }))
        }
        else if (data["nomSalle"] === "Aucune préférence") {
            fetch("http://localhost:8080/Salles/Disponibilitehoraire", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    horaire: data["Date"] + ' ' + data["Horaire"],
                    horairefin: heure,
                })
            }).then(response => response.json())
                .then(response => this.setState({ response: response }))
        }
        else {
            fetch("http://localhost:8080/Salles/Disponibilite", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    horaire: data["Date"] + ' ' + data["Horaire"],
                    horairefin: heure,
                    idsalle: data["idSalle"],
                })
            }).then(response => response.json())
                .then(response => this.setState({ response: response }))
        }
    }
    componentDidMount() {

    }

    render() {
        return <div className="TakeReservation">
            <div className={this.state.response.length === 0 ? "recherche" : "recherche rechercheMove"}>
                <h2 className="h2font"> Rechercher et réserver une salle </h2>
                <hr className="separator"></hr>
                <form className="reservForm" onSubmit={this.testErreur}>
                    <p id="erreur_Date" className={this.state.Error}>{this.state.erreurTextDate}</p>
                    <p className="listTitre"> Date de ma réservation : </p>
                    <input type="date" className="listD" id="start" name="trip-start" onChange={this.DateChange} />
                    <p id="erreur_Heure" className={this.state.Error}>{this.state.erreurTextHoraire}</p>
                    <p className="listTitre"> Heure de ma réservation : </p>
                    <Select className="listD" placeholder='Aucune préférence' options={Horaire} onChange={this.HoraireChange} />
                    <p id="erreur_Heure" className={this.state.Error}>{this.state.erreurTextDuree}</p>
                    <p className="listTitre"> Durée de ma réservation : </p>
                    <Select className="listD" placeholder='Aucune préférence' options={Duree} onChange={(e, { value }) => this.setState({ Error: "erreur", erreurTextHoraire: "", Duree: value })} />
                    <p id="erreur_University" className={this.state.Error}>{this.state.erreurTextFac}</p>
                    <p className="listTitre"> Mon Université :  </p>
                    <Select className="listD" placeholder='Sélectionnez mon université' options={Université} onChange={this.FacChange} />
                    <p id="erreur_Batiment" className={this.state.Error}>{this.state.erreurTextBatiment}</p>
                    <p className="listTitre"> Batiment désiré : </p>
                    <Select id="email" name="email" htmlFor="email" className="listD" placeholder='Sélectionnez le batiment' options={Batiment} onChange={this.BatimentChange} />
                    <p id="erreur_Salle" className={this.state.Error}>{this.state.erreurTextSalle}</p>
                    <p className="listTitre"> Salle : </p>
                    <Select className="listD" placeholder='Sélectionnez la salle' options={Salle} onChange={(e, { value }) => this.setState({ idSalle: value, Error: "erreur", erreurTextSalle: "", nomSalle: e.target.textContent })} />
                    <div className="ReservationBtn">
                        <Button primary>Vérifier les disponibilités</Button>
                    </div>
                </form>
            </div>
            {this.state.response.length !== 0 && <section class="container-fluid reserv">
                <div class="propositions">
                    <h2 className="h2font"> Propositions de réservation </h2>
                    <hr class="separator"></hr>
                    {this.state.response.map((line, index) =>
                        <div className="centrageSegment">
                            <Segment>
                                <div className="Left">
                                    Salle {line.nomSalle}
                                </div>
                                <div className="Right">
                                    Salle {line.nomSalle} disponible à partir de {this.state.Horaire} pour {Math.trunc(Number(this.state.Duree) * 30 / 60)}H{Number(this.state.Duree) * 30 % 60 === 0 ? '00' : Number(this.state.Duree) * 30 % 60}
                                </div>
                                <Checkbox checked={this.state.activeIndex === index} index={index} id={index} onClick={this.handleClick} label="Sélectionner" />
                            </Segment>
                        </div>
                    )}
                    <div class="ReservationBtnReserver">
                        {this.state.response.length === 0 && <h2>Aucune résevration disponible pour ces critères</h2>}
                        <Button primary onClick={this.handleResa}>Réserver</Button>
                    </div>
                </div>
            </section>}
        </div>
    }
}




