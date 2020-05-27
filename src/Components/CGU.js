import React from 'react';
import "../CSS/CGU.css"
import { Button } from 'semantic-ui-react'


export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isChecked2: false,
      Date: '',
      Horaire: '',
      Duree: '',
      Fac: '',
      Batiment: '',
      Salle: ''
    };
  }

  componentDidMount() {
    const { data } = this.props.location
    if (data !== undefined) {
      this.setState({
        Date: data[0]["Date"],
        Horaire: data[0]["Horaire"],
        Duree: data[0]["Duree"],
        Fac: data[0]["Fac"],
        Batiment: data[0]["Batiment"],
        Salle: data[0]["Salle"]
      });
    }
  }

  CGUAccept = (e) => {
    if (this.state.isChecked && this.state.isChecked2) {
      fetch("http://localhost:8080/Salles/Reserver", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          horaire: this.state.Date + ' ' + this.state.Horaire,
          idsalle: this.state.Salle,
          duree: Number(this.state.Duree) * 30,
          idreservant: "1",
        })
      })
      this.props.history.push({
        pathname: '/u-resa/HistoEtResas',
      })
    }
  }

  toggleChange1 = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  toggleChange2 = () => {
    this.setState({
      isChecked2: !this.state.isChecked2,
    });
  }

  render() {
    return <div class="container">
      <div class="cgu">
        <div class="stylBord">
          <div class="stylText">
            <h3>
              Conditions générales d’utilisation :</h3>
            <p>
              Veuillez lire attentivement les présentes Conditions générales d’utilisation (CGU) car elles contiennent des informations importantes concernant vos droits et obligations.
  </p>
            <p>
              En acceptant ces CGU, l’utilisateur certifie sur l’honneur être bien la personne qui va utiliser la salle qu’il a réservé et qu’aucune personne n’étant pas inscrite à l’Université de Bordeaux ne sera présente avec lui dans la salle.
 </p>
            <p>
              L’utilisation des salles de l’Université de Bordeaux est soumise au règlement intérieur rédigé par les instances directrices de l’université et en accord avec le droit français. Il convient de respecter en plus du règlement intérieur les règles de gestion de cette application telles que :
              <li className="liCGU">Un personnel gestionnaire de l’université à le pouvoir de créer, supprimer ou déplacer n’importe quelle réservation.</li>
              <li className="liCGU">Un professeur est prioritaire sur l’utilisation de la salle. Même si aucune réservation n’est faite par l’enseignant, il peut réquisitionner la salle afin d’y faire cours sans passer par l’application.</li>
              <li className="liCGU">Un étudiant voulant réserver une salle au nom d’une association se verra dans l’obligation de fournir un motif de réservation. L’étudiant en question doit obligatoirement être membre de l’association. Le Bureau de la Vie Étudiante du campus de rattachement de l’association sera alors informé et pourra valider le créneau selon la nature du motif de réservation.</li>
            </p>
            <p>
              De plus, l’utilisateur s’engage à respecter les lieux et à éviter toutes formes de dégradations ou autres actions qui pourraient nuire aux prochains utilisateurs de la salle (dégradation du matériel, déplacement du mobilier sans le remettre à sa place etc…).
  </p>
            <p>
              Veuillez noter qu’en cas d’endommagement de la salle, la responsabilité civile de l’utilisateur pourra être engagée.
 </p>
            <p>
              Je consens avoir pris connaissance des conditions générales d’utilisation :
              </p>
            <p>
              J’accepte les conditions générales d’utilisations et certifie sur l’honneur disposer d’une inscription à jour à l'Université de Bordeaux ainsi que d’une assurance de responsabilité civile validée et à jour sur cette période (fournie lors de l’inscription) :
          </p>
          </div>
          {this.state.Date !== '' &&
            <div>
              <div>
                <input id="CheckboxCGU1" name="CheckboxCGU1" onChange={this.toggleChange1} type="checkbox" value="Admin" className="checkCGU" />
                <label for="Checkbox1">J'ai lu et compris les CGU</label>
              </div>
              <div>
                <input id="CheckboxCGU2" name="CheckboxCGU2" onChange={this.toggleChange2} type="checkbox" value="Admin" className="checkCGU" />
                <label for="Checkbox1">J'accepte les conditions générales d'utilisations</label>
              </div>
              <div className="ReservationBtnCGU">
                <Button primary onClick={this.CGUAccept}>Valider ma première réservation</Button>
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  }
}

