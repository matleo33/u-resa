import React from 'react';
import "../CSS/Reservation.css"
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return <div>
            <section class="container-fluid reserv">
                <div class="ReservationFirst">
                    <h2> Mes réservations </h2>
                    <hr class="separator"></hr>
                    <div id="titi">
                        <Link to="/u-resa/"><Button secondary>Historique</Button></Link>
                    </div>
                </div>
            </section>
        </div>
    }
}




