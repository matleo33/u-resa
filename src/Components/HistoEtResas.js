import React from 'react';
import "../CSS/Reservation.css"
import { Button, Divider, Table } from 'semantic-ui-react'

function handleDate(array) {
    array.forEach(element => {
        const date = element.horaire.substring(0, 10);
        const heure = element.horaire.substring(11, 19);
        const format = date + ' ' + heure;
        element.horaire = format;
    });
}

const TableResa = (props) => {
    const visibilityMethod = props.visibility || "visible";
    if (props.content.length === 0) {
        return <div style={{ "text-align": "center", visibility: visibilityMethod }}>Vous n'avez encore fait aucune réservation</div>
    } else {
        handleDate(props.content);
        return <Table celled striped collapsing style={{ "margin-left": "auto", "margin-right": "auto", visibility: visibilityMethod }}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Date et heure
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Durée
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Salle
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.content.map((line) =>
                    <Table.Row>
                        <Table.Cell>
                            {line.horaire}
                        </Table.Cell>
                        <Table.Cell>
                            {line.duree}
                        </Table.Cell>
                        <Table.Cell>
                            {line.nomSalle}
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    }
}

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityHistoric: "hidden",
            reservations: [],
            historic: []
        };
    }

    toggleVisibilityHistoric() {
        if (this.state.visibilityHistoric === "visible") {
            this.setState({ visibilityHistoric: "hidden" });
        } else {
            this.setState({ visibilityHistoric: "visible" });
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/User/1/Resas/Historique")
            .then(response => response.json())
            .then(response => this.setState({ historic: response }))
        fetch("http://localhost:8080/User/1/Resas/Encours")
            .then(response => response.json())
            .then(response => this.setState({ reservations: response }));
    }

    render() {
        return <div className="fillall">
            <section class="container-fluid reserv">
                <div class="ReservationFirst">
                    <h2> Mes réservations </h2>
                    <Divider />
                    <TableResa content={this.state.reservations} />
                    <Divider />
                    <div style={{ "textAlign": "center", marginBottom: "20px" }}>
                        <Button onClick={() => this.toggleVisibilityHistoric()}>Voir/Cacher mon historique</Button>
                    </div>
                    <TableResa content={this.state.historic} visibility={this.state.visibilityHistoric} />
                </div>
            </section>
        </div>
    }
}




