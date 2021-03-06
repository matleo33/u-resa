import React from 'react';
import "../CSS/HistoEtResas.css"
import { Button, Divider, Table, Message } from 'semantic-ui-react'


const TableResa = (props) => {
    if (props.content.length === 0) {
        return <div className="Aucuneresas" style={{ "textAlign": "center" }}>Vous n'avez encore fait aucune réservation</div>
    } else {
        return <Table celled striped collapsing style={{ "marginLeft": "auto", "marginRight": "auto" }}>
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
                    {props.annulable && <Table.HeaderCell>
                        Annuler
                    </Table.HeaderCell>}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.content.map((line, index) =>
                    <Table.Row key={index}>
                        <Table.Cell>
                            {line.horaire}
                        </Table.Cell>
                        <Table.Cell>
                            {Math.trunc(Number(line.duree) / 60)}H{Number(line.duree) % 60 === 0 ? '00' : Number(line.duree) % 60}
                        </Table.Cell>
                        <Table.Cell>
                            {line.nomSalle}
                        </Table.Cell>
                        {props.annulable && <Table.Cell>
                            <Button negative index={index} id={index} onClick={(e, titleProps, line) => props.toggleDelete(e, titleProps, line)}>Annuler</Button>
                        </Table.Cell>}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    }
}

export default class Historique extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityHistoric: "hidden",
            reservations: [],
            historic: [],
            profile: props.profile,
            Date: '',
            Horaire: '',
            Duree: '',
            Fac: '',
            Batiment: '',
            idSalle: '',
            nomSalle: ''
        };
    }

    toggleDelete(e, titleProps, line) {
        console.log("allo")
        const { index } = titleProps//Corrier ça : j'ai pas réussi à récupérer les données des props, par manque de temps
        fetch("http://localhost:8080/Salles/Supprimer", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                horaire_salle: this.state.reservations[index]["horaire"] + '_' + this.state.reservations[index]["id_salle"],
            })
        })
        this.state.reservations.splice(index, 1)
        this.forceUpdate()
    }

    toggleVisibilityHistoric() {
        if (this.state.visibilityHistoric === "visible") {
            this.setState({ visibilityHistoric: "hidden" });
        } else {
            this.setState({ visibilityHistoric: "visible" });
        }
    }

    correctDate(response) {
        var toReturn = response;
        toReturn.forEach(element => {
            const minutes = element.horaire.substring(14, 16);
            var heure = element.horaire.substring(11, 13);
            heure = parseInt(heure) + 1;
            const date = element.horaire.substring(0, 10);
            element.horaire = date + " " + heure + "H" + minutes;
        });
        return toReturn;
    }

    componentDidMount() {
        fetch("http://localhost:8080/User/1/Resas/Historique")
            .then(response => response.json())
            .then(response => this.correctDate(response))
            .then(response => this.setState({ historic: response }))
        fetch("http://localhost:8080/User/1/Resas/Encours")
            .then(response => response.json())
            .then(response => this.correctDate(response))
            .then(response => this.setState({ reservations: response }));
        const { data } = this.props.location
        if (data !== undefined) {
            this.setState({
                Date: data[0]["Date"],
                Horaire: data[0]["Horaire"],
                Duree: data[0]["Duree"],
                Fac: data[0]["Fac"],
                Batiment: data[0]["Batiment"],
                idSalle: data[0]["idSalle"],
                nomSalle: data[0]["nomSalle"]
            });
        }
    }

    render() {
        return <div className="fillresas">
            <section className="container-fluid histo">
                <div className="ReservationFirst">
                    {this.state.Status === 200 &&
                        <Message
                            success
                            header='Réservation validée !'
                            content={'Votre réservation salle ' + this.state.nomSalle + ', le ' + this.state.Date + ' à ' + this.state.Horaire + ' pour ' + Math.floor(this.state.Duree * 30 / 60) + 'H' + (this.state.Duree * 30 % 60 === 0 ? "" : this.state.Duree * 30 % 60) + ' a été prise en compte. A bientôt sur nos campus !'}
                        />
                    }
                    {this.state.Status === 401 &&
                        <Message
                            negative
                            header='Réservation annulée'
                            content={'Votre réservation n\'est pas prise en compte car vous possédez déjà une réservation sur cette plage horaire'}
                        />
                    }
                    <h2 className="h2histo"> Mes réservations </h2>
                    <Divider />
                    <TableResa annulable={true} content={this.state.reservations} toggleDelete={(e, titleProps) => this.toggleDelete(e, titleProps)} />
                    <Divider />
                    <div style={{ "textAlign": "center", marginBottom: "20px" }}>
                        <Button onClick={() => this.toggleVisibilityHistoric()}>Voir/Cacher mon historique</Button>
                    </div>
                    {this.state.visibilityHistoric === "visible" && <TableResa annulable={false} content={this.state.historic} />}
                </div>
            </section>
        </div>
    }
}


//Math.trunc(Number(this.state.Duree) * 30 / 60) + 'H' + (Number(this.state.Duree) * 30 % 60 === 0 ? '00' : Number(this.state.Duree) * 30 % 60)

