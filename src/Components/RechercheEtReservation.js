import React from 'react';
import "../CSS/Recherche.css"
import { Button, Segment } from 'semantic-ui-react'



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
        }
    };

    routeChange = (e) => {
        e.preventDefault();
        window.location = './CGU';
    }

    NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <li class="listD">{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        ); 
    }


      componentDidMount(){
        const { data } = this.props.location
        this.setState({
            Date: data[0]["Date"],
      Horaire: data[0]["Horaire"],
      Fac: data[0]["Fac"],
      Batiment: data[0]["Batiment"],
      Salle: data[0]["Salle"],
          })
        }

    render() {
        var numbers = ["{A,B,C}", "{A,B,C}", "{A,B,C}"];

        return <div>
            <section class="container-fluid reserv">
                <div class="TakeReservation">
                    <h2> Propositions de réservation </h2>
                    <hr class="separator"></hr>
                    <div class="reservForm">
                        <p class="listD">Pellentesque habitant morbi tristique senectus.</p>
                        <this.NumberList numbers={numbers} />
                    </div>
                    <div class="ReservationBtn">
                        <Button primary onClick={this.routeChange}>Réserver</Button>
                    </div>
                </div>
            </section>
        </div>
    }
}




