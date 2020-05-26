import React from 'react';
import "../CSS/Reservation.css"
import { Button, Divider, Table } from 'semantic-ui-react'

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityHistoric: "none",
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
            .then(response => this.setState({ reservations: response }))
    }

    render() {
        return <div className="fillall">
            <section class="container-fluid reserv">
                <div class="ReservationFirst">
                    <h2> Mes réservations </h2>
                    <Divider />
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell>
                                    Date
                                </Table.Cell>
                                <Table.Cell>
                                    Salle
                                </Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.reservations.map((line) =>
                                <Table.Row>
                                    <Table.Cell>
                                        {line.horaire}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {line.nomSalle}
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                    <Divider />
                    <Button onClick={() => this.toggleVisibilityHistoric()}>Voir/Cacher mon historique</Button>
                    <Table striped style={{ visibility: this.state.visibilityHistoric }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell>
                                    Date
                                </Table.Cell>
                                <Table.Cell>
                                    Salle
                                </Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.historic.map((line) =>
                                <Table.Row>
                                    <Table.Cell>
                                        {line.horaire}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {line.nomSalle}
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </section>
        </div>
    }
}




