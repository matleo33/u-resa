import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import * as functions from '../functions';




function Reserver(props) {
    return (
        <section className="container-fluid reserv">
            <div className="propositions">
                <h2 className="h2font"> Propositions de réservation </h2>
                <hr className="separator"></hr>
                {props.response.map((line, index) =>

                    <div key={index} id={index} className="centrageSegment">
                        <Button animated className="propos" index={index} id={index} onClick={props.handleResa}>
                            <Button.Content visible className="taillebouton">
                                <div className="Recto">
                                    {line.nomBatiment} . {line.nomSalle}
                                </div>
                            </Button.Content>
                            <Button.Content hidden>
                                <div className="Left">
                                    <p id={index}>Disponible à partir de {props.Horaire} pour {props.Duree}</p>
                                    <p id={index}>{line.Capacite} places</p>
                                </div>
                            </Button.Content>
                        </Button>
                    </div>
                )}
                <div className="ReservationBtnReserver">
                    {props.response.length === 0 && <h2>Aucune résevration disponible pour ces critères</h2>}
                </div>
            </div>
        </section>

    )
}

Reserver.propTypes = {
    response: PropTypes.array.isRequired,
    Horaire: PropTypes.string.isRequired,
    Duree: PropTypes.string.isRequired,
    handleResa: PropTypes.func.isRequired,
};

export default Reserver;
