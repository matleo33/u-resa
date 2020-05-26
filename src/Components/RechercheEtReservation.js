import React from 'react';
import "../CSS/Recherche.css"
import { Button, Segment, Checkbox } from 'semantic-ui-react'



export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            numbers: ["A", "B"],
            Date: "",
            Horaire: "",
            Duree: "",
            Fac: "",
            Batiment: "",
            Salle: "",
            response: [],
            activeIndex: -1
        }
    };


    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    componentDidMount() {
        const { data } = this.props.location
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
        console.log(data[0]["Date"] + ' ' + data[0]["Horaire"])
        console.log(heure)
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

    render() {
        return <div>
            <section class="container-fluid reserv">
                <div class="TakeReservation">
                    <h2> Propositions de réservation </h2>
                    <hr class="separator"></hr>
                    {this.state.response.map((line, index) =>
                        <Segment>
                            <div className="Left">
                                Salle {line.nomSalle}
                            </div>
                            <div className="Right">
                                Salle {line.nomSalle} disponible à partir de {this.state.Horaire} pour {this.state.Duree * 30} minutes
                            </div>
                            <Checkbox checked={this.state.activeIndex === index} index={index} id={index} onClick={this.handleClick} label="Sélectionner" />
                        </Segment>
                    )}
                    <div class="ReservationBtn">
                        <Button primary onClick={this.routeChange}>Réserver</Button>
                    </div>
                </div>
            </section>
        </div>
    }
}




