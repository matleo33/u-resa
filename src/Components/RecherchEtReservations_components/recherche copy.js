import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select } from 'semantic-ui-react';
import * as db_access from './db_access';


const Duree = [
    { key: 'af', value: '1', text: '30 min' },
    { key: 'ax', value: '2', text: '1H' },
    { key: 'ap', value: '3', text: '1H 30 min' },
    { key: 'al', value: '4', text: '2H' },
    { key: 'ar', value: '5', text: '2H 30 min' },
    { key: 'am', value: '6', text: '3H' },
    { key: 'an', value: '7', text: '3H 30 min' },
    { key: 'ao', value: '8', text: '4H' },
]


/*const Horaire = [
    { key: 'a', value: 'a', text: 'Aucune préférence' },
    { key: 'b', value: 'b', text: '8H00' },
    { key: 'c', value: 'c', text: '8H30' },
    { key: 'd', value: 'd', text: '9H00' },
    { key: 'e', value: 'e', text: '9H30' },
    { key: 'f', value: 'f', text: '10H00' },
    { key: 'g', value: 'g', text: '10H30' },
    { key: 'h', value: 'h', text: '11H00' },
    { key: 'i', value: 'i', text: '11H30' },
    { key: 'j', value: 'j', text: '12H00' },
    { key: 'k', value: 'k', text: '12H30' },
    { key: 'l', value: 'l', text: '13H00' },
    { key: 'm', value: 'm', text: '13H30' },
    { key: 'n', value: 'n', text: '14H00' },
    { key: 'o', value: 'o', text: '14H30' },
    { key: 'p', value: 'p', text: '15H00' },
    { key: 'q', value: 'q', text: '15H30' },
    { key: 'r', value: 'r', text: '16H00' },
    { key: 's', value: 's', text: '16H30' },
    { key: 't', value: 't', text: '17H00' },
    { key: 'u', value: 'u', text: '17H30' },
]*/

export default class Recherche extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Error: props.Error,
            DateJour: props.DateJour,
            Date: props.Date,
            Horaire: props.Horaire,
            Duree: props.Duree,
            Fac: props.Fac,
            Batiment: props.Batiment,
            nomSalle: props.nomSalle,
            idSalle: props.idSalle,
            response: props.response,
            CGU: props.CGU,
            profile: props.profile,
            erreurTextDate: props.erreurTextDate,
            erreurTextHoraire: props.erreurTextHoraire,
            erreurTextFac: props.erreurTextFac,
            erreurTextBatiment: props.erreurTextBatiment,
            erreurTextSalle: props.erreurTextSalle,
            erreurTextDuree: props.erreurTextDuree,
            salles: props.salles,
            batiments: props.batiments,
            sites: props.sites,
            horaireReservable: props.horaireReservable
        }
    };



    render() {
        return <div className={this.state.response.length === 0 ? "recherche" : "recherche rechercheMove"}>
            <h2 className="h2font"> Rechercher et réserver une salle </h2>
            <hr className="separator"></hr>
            <div>aa {this.state.CGU} {console.log(this.state) && this.state.sites.map((salle) => salle.Code_site)}</div>
            <form className="reservForm" onSubmit={this.state.handleError}>
                <p id="erreur_Date" className={this.state.Error}>{this.state.erreurTextDate}</p>
                <p className="listTitre"> Date de ma réservation : </p>
                <input type="date" className="listD selectRecherche" id="start" name="trip-start" onChange={this.state.DateChange} />
                <p id="erreur_Heure" className={this.state.Error}>{this.state.erreurTextHoraire}</p>
                <p className="listTitre"> Heure de ma réservation : </p>
                <select className="listD selectRecherche" placeholder='Aucune préférence' onChange={this.state.HoraireChange}>
                    {this.state.horaireReservable.map((horaireReservable) => <option className='optionItem' key={horaireReservable.heure} value={horaireReservable.heure}>{horaireReservable.heure}</option>)}
                </select>
                <p id="erreur_Heure" className={this.state.Error}>{this.state.erreurTextDuree}</p>
                <p className="listTitre"> Durée de ma réservation : </p>
                <select className="listD selectRecherche" placeholder='Aucune préférence' onChange={this.state.Dureechange} >
                    {Duree.map((duree) => <option key={duree.value} value={duree.value}>{duree.text}</option>)}
                </select>
                <p id="erreur_University" className={this.state.Error}>{this.state.erreurTextFac}</p>
                <p className="listTitre"> Mon Université : </p>
                <select className="listD selectRecherche" placeholder='Sélectionnez mon université' onChange={this.state.FacChange}>
                    <option className='optionItem' key={-1} value={-1}>Sélectionner un campus</option>
                    {this.state.sites.map((site) => this.state.profile.campus === site.Site && <option className='optionItem' key={site.Code_site} value={site.Code_site}>{site.Site}</option>)}
                </select>
                <p id="erreur_Batiment" className={this.state.Error}>{this.state.erreurTextBatiment}</p>
                <p className="listTitre"> Batiment désiré : </p>
                <select className="listD selectRecherche" placeholder='Sélectionnez le batiment' onChange={this.state.BatimentChange}>
                    <option className='optionItem' key={-1} value={-1}>Sélectionner un batiment</option>
                    {this.state.batiments.map((batiment) => Number(batiment.Code_site) === Number(this.state.Fac) && <option key={batiment.Id} value={batiment.Id}>{batiment.Batiment}</option>)}
                </select>
                <p id="erreur_Salle" className={this.state.Error}>{this.state.erreurTextSalle}</p>
                <p className="listTitre"> Salle : </p>
                <select className="listD selectRecherche" placeholder='Sélectionnez la salle' onChange={this.state.SalleChange}>
                    <option className='optionItem' key={-1} value={-1}>Sélectionner une salle</option>
                    {db_access.countSalle(this.state.salles, this.state.Batiment) && this.state.salles.map((salle) => ((Number(salle.idBatiment) === Number(this.state.Batiment) || Number(salle.id_salle) === 0)) && <option key={salle.id_salle} value={salle.id_salle}>{salle.Code_salle}</option>)}
                </select>
                <div className="ReservationBtn">
                    <Button primary>Vérifier les disponibilités</Button>
                </div>
            </form>
        </div>

    };

}

/**Recherche.propTypes = {
    Error: PropTypes.string.isRequired,
    erreurTextDate: PropTypes.string.isRequired,
    erreurTextHoraire: PropTypes.string.isRequired,
    erreurTextDuree: PropTypes.string.isRequired,
    erreurTextFac: PropTypes.string.isRequired,
    erreurTextBatiment: PropTypes.string.isRequired,
    erreurTextSalle: PropTypes.string.isRequired,
    salles: PropTypes.array.isRequired,
    batiments: PropTypes.array.isRequired,
    Batiment: PropTypes.string.isRequired,
    Fac: PropTypes.string.isRequired,
    sites: PropTypes.array.isRequired,
    profile: PropTypes.array.isRequired,
    horaireReservable: PropTypes.array.isRequired,
    response: PropTypes.array.isRequired,
    handleError: PropTypes.func.isRequired,
    DateChange: PropTypes.func.isRequired,
    HoraireChange: PropTypes.func.isRequired,
    FacChange: PropTypes.func.isRequired,
    BatimentChange: PropTypes.func.isRequired,
    SalleChange: PropTypes.func.isRequired,
    Dureechange: PropTypes.func.isRequired
};*/

