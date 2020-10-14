import React from 'react';
import "../CSS/Reservation.css"
import Recherche from './RecherchEtReservations_components/recherche';
import Resa from './RecherchEtReservations_components/reservation';
//import loadreferentiel from './RecherchEtReservations_components/fonctions'




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
        this.loadreferentiel = this.loadreferentiel.bind(this);
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
            sites: []
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

    Dureechange(event) {
        this.setState({
            Error: "erreur",
            erreurTextHoraire: "",
            Duree: event.target.textContent
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
            Batiment: event.target.value
        });
    }

    SalleChange(event) {
        this.setState({
            Error: "erreur",
            erreurTextSalle: "",
            nomSalle: event.target.textContent,
            idSalle: event.target.value
        });
    }

    handleResa(e, titleProps) {
        const { index } = titleProps
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
                            idsalle: this.state.response[index.toString()]["id_salle"],
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
                            idSalle: this.state.response[index.toString()]["id_salle"],
                            nomSalle: this.state.response[index.toString()]["nomSalle"],
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
                            idSalle: this.state.response[index.toString()]["id_salle"],
                            nomSalle: this.state.response[index.toString()]["nomSalle"],
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
                    idsalle: data["idSalle"]
                })
            }).then(response => response.json())
                .then(response => this.setState({ response: response }))
        }
        else if (data["idSalle"] === '0') {
            fetch("http://localhost:8080/Salles/Disponibilitehoraire", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    horaire: data["Date"] + ' ' + data["Horaire"],
                    horairefin: heure,
                    idBatiment: data["Batiment"]
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

    loadreferentiel() {
        fetch("http://localhost:8080/Salles/Salles", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => this.setState({ salles: response }))
        fetch("http://localhost:8080/Salles/Batiments", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => this.setState({ batiments: response }))
        fetch("http://localhost:8080/Salles/Sites", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => this.setState({ sites: response }))
    }



    componentDidMount() {
        this.loadreferentiel();
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
                response={this.state.response}
                handleError={this.testErreur}
                DateChange={this.DateChange}
                HoraireChange={this.HoraireChange}
                FacChange={this.FacChange}
                BatimentChange={this.BatimentChange}
                SalleChange={this.SalleChange}
                Dureechange={this.Dureechange} />
            {this.state.response.length !== 0 && <Resa response={this.state.response}
                Horaire={this.state.Horaire}
                Duree={this.state.Duree}
                handleResa={this.handleResa} />
            }
        </div>
    }
}