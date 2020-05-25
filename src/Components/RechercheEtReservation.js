import React from 'react';
import "../CSS/Recherche.css"
import { Button, Table } from 'semantic-ui-react'



export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: ["A", "B"],
            Date: "",
            Horaire: "",
            Fac: "",
            Batiment: "",
            Salle: "",
            response: []
        }
    };


    componentDidMount() {
        const { data } = this.props.location
        this.setState({
            Date: data[0]["Date"],
            Horaire: data[0]["Horaire"],
            Fac: data[0]["Fac"],
            Batiment: data[0]["Batiment"],
            Salle: data[0]["Salle"]
        });
        console.log(data[0]["Date"] + ' ' + data[0]["Horaire"])
        console.log("ok")
        fetch("http://localhost:8080/Salles/Disponibilitehoraire", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                horaire: "19/5/2020 14:00",//data[0]["Date"] + ' ' + data[0]["Horaire"],
                horairefin: "19/5/2020 16:00",//data[0]["Date"] + ' ' + data[0]["Horaire"],
            })
        }).then(response => response.json())
            .then(response => this.setState({ response: response }))
    }

    render() {
        return <div>
            <section class="container-fluid reserv">
                <div class="TakeReservation">
                    <h2> Propositions de réservation </h2>
                    <hr class="separator"></hr>
                    <div class="reservForm">
                        <ul>
                            {this.state.response.map((line) =>
                                <li>
                                    {line.nomSalle}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div class="ReservationBtn">
                        <Button primary onClick={this.routeChange}>Réserver</Button>
                    </div>
                </div>
            </section>
        </div>
    }
}




