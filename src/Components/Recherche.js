import React from 'react';
import "../CSS/Recherche.css"
import { Button, Segment } from 'semantic-ui-react'


export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: ["A", "B"]
        }
    };


    NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <li class="listD">{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }


    render() {
        var numbers = ["{A,B,C}", "B"];
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
                        <Button primary onClick={this.toggleChange}>Réserver</Button>
                    </div>
                </div>
            </section>
        </div>
    }
}




