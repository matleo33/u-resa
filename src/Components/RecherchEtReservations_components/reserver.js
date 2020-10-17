import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'


//Math.trunc(Number(props.Duree) * 30 / 60)}H{Number(props.Duree) * 30 % 60 === 0 ? '00' : Number(props.Duree) * 30 % 60
function reserver(props) {
    return (
        <section className="container-fluid reserv">
            <div className="propositions">
                <h2 className="h2font"> Propositions de réservation </h2>
                <hr className="separator"></hr>
                {props.response.map((line, index) =>
                    <div key={index} className="centrageSegment">
                        <Button animated className="propos" index={index} id={index} onClick={props.handleResa}>
                            <Button.Content visible className="taillebouton">
                                <div className="Left">
                                    {line.nomBatiment} . {line.nomSalle}
                                </div>
                            </Button.Content>
                            <Button.Content hidden>
                                <div className="Right">
                                    Salle {line.nomSalle} disponible à partir de {props.Horaire} pour {props.Duree}
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

reserver.propTypes = {
    response: PropTypes.array.isRequired,
    Horaire: PropTypes.string.isRequired,
    Duree: PropTypes.string.isRequired,
    handleResa: PropTypes.func.isRequired
};

export default reserver;
