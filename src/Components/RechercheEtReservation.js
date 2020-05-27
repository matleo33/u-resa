import React from 'react';
import "../CSS/Recherche.css"
import { Button, Segment, Checkbox } from 'semantic-ui-react'



export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleResa = this.handleResa.bind(this);
        this.state = {
            Date: "",
            Horaire: "",
            Duree: "",
            Fac: "",
            Batiment: "",
            Salle: "",
            response: [],
            activeIndex: -1,
            CGU: -1,
            profile: props.profile
        }
    };


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
                        })
                    })
                    this.props.history.push({
                        pathname: '/u-resa/HistoEtResas',
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
                    console.log(data)
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

    componentDidMount() {
        const { data } = this.props.location
        if (data !== undefined) {
            this.setState({
                Date: data[0]["Date"],
                Horaire: data[0]["Horaire"],
                Duree: data[0]["Duree"],
                Fac: data[0]["Fac"],
                Batiment: data[0]["Batiment"],
                Salle: data[0]["Salle"]
            });
            var str = data[0]["Horaire"].split("H")
            var heuresansretenue = (Number(str[0]) + Number(Math.trunc((data[0]["Duree"] * 30) / 60))) + 'H' + (Number(str[1]) + Number((data[0]["Duree"] * 30) % 60))
            var str2 = heuresansretenue.split("H")
            var heure = data[0]["Date"] + ' ' + (Number(str2[0]) + Number((Math.trunc(Number(str2[1]) / 60)))) + 'H' + (Number(str2[1]) % 60)
            if (data[0]["Horaire"] === "Aucune préférence") {
                fetch("http://localhost:8080/Salles/Disponibilitesalle", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        date: data[0]["Date"],
                        idsalle: data[0]["Salle"]
                    })
                }).then(response => response.json())
                    .then(response => this.setState({ response: response }))
            }
            else if (data[0]["Salle"] === "Aucune préférence") {
                fetch("http://localhost:8080/Salles/Disponibilitehoraire", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        horaire: data[0]["Date"] + ' ' + data[0]["Horaire"],
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
                        horaire: data[0]["Date"] + ' ' + data[0]["Horaire"],
                        horairefin: heure,
                        idsalle: data[0]["Salle"],
                    })
                }).then(response => response.json())
                    .then(response => this.setState({ response: response }))
            }
        }
    }

    render() {
        return <div className="fillall">
            <section class="container-fluid reserv">
                <div class="TakeReservation">
                    <h2> Propositions de réservation </h2>
                    <hr class="separator"></hr>
                    {this.state.response.map((line, index) =>
                        <div className="centrageSegment">
                            <Segment>
                                <div className="Left">
                                    Salle {line.nomSalle}
                                </div>
                                <div className="Right">
                                    Salle {line.nomSalle} disponible à partir de {this.state.Horaire} pour {this.state.Duree * 30} minutes
                            </div>
                                <Checkbox checked={this.state.activeIndex === index} index={index} id={index} onClick={this.handleClick} label="Sélectionner" />
                            </Segment>
                        </div>
                    )}
                    <div class="ReservationBtnReserver">
                        <Button primary onClick={this.handleResa}>Réserver</Button>
                    </div>
                </div>
            </section>
        </div>
    }
}




