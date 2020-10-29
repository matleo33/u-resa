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
      idSalle: '',
      nomSalle: ''
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
        idSalle: data[0]["idSalle"],
        nomSalle: data[0]["nomSalle"]
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
          idsalle: this.state.idSalle,
          duree: Number(this.state.Duree) * 30,
          idreservant: "1",
        })
      })
      fetch("http://localhost:8080/User/CGU", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idutilisateur: "1",
        })
      })
      let data = [
        {
          Date: this.state.Date,
          Horaire: this.state.Horaire,
          Fac: this.state.Fac,
          Batiment: this.state.Batiment,
          idSalle: this.state.idSalle,
          nomSalle: this.state.nomSalle,
          Duree: this.state.Duree,
        }
      ]
      this.props.history.push({
        pathname: '/u-resa/HistoEtResas',
        data: data
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
              Conditions générales d’utilisation :
              </h3>

            <p>
              Veuillez lire attentivement les présentes Conditions générales d’utilisation (CGU) car elles contiennent des informations importantes concernant vos droits et devoirs.
   </p>

            <p>
              En acceptant ces CGU, l’utilisateur certifie sur l’honneur être bien la personne qui va utiliser la salle qu’il a réservé et que les personnes l’accompagnant sont bien des étudiants inscrits à l’université de Bordeaux.
   </p>


            <p>
              L’utilisateur s'engage à utiliser la salle réservée dans le respect du développement paisible des missions de l’Université et en veillant à ne pas troubler l’ordre public.
              L’utilisateur s'interdit toute utilisation des locaux, ou du matériel, à d’autres fins que ceux découlant de sa condition d’étudiant de l’Université.
 </p>

            <p>
              L’utilisateur reconnait être notamment informé des règles relatives :
 <li className="liCGU">à l'interdiction de fumer prévue par l’article L.3512-8 du code de la santé public ;</li>
              <li className="liCGU">à l’interdiction de vapoter prévue par le décret n° 2017-633 du 25 avril 2017 ;</li>
              <li className="liCGU">à l’interdiction de consommer des boissons alcoolisées sur le Campus prévue par l’article R.4228-20 du code de la santé public ;</li>
              <li className="liCGU">à l’interdiction de vente de boissons alcooliques aux mineurs prévue par l’article L.3342-1 du même code.</li>
            </p>

            <p>
              Les consignes de contrôle et sécurité doivent être respectées par l’utilisateur ainsi que ses accompagnants lors de l’utilisation de la salle. L’Université se réserve le droit d’exercer un contrôle du respect de ces règles.
              </p>

            <p>
              L’Université se réserve le droit d’interdire l’accès aux personnes ayant réservé les salles et ses accompagnants en cas de non-respect de ces dispositions.
              </p>

            <p>
              Plus généralement, l’utilisateur s’engage à respecter les lieux et à éviter toutes formes de dégradations ou autres actions qui pourraient nuire aux utilisateurs suivants de la salle (dégradation du matériel, déplacement du mobilier sans le remettre à sa place etc…).
              Veuillez noter qu’en cas de dommage causé à la salle ou au mobilier, la responsabilité civile de l’utilisateur pourra être engagée.
              L’utilisateur reste garant face à l’université de Bordeaux de tout manquement aux présentes conditions générales d’utilisation, même si ce manquement a été commis par ses accompagnants.
 </p>

            <p>
              Il est précisé ici, pour information et à tout fin utile, les règles de gestion de réservation suivantes :
              <li className="liCGU">Un personnel en charge des réservations des salles a le pouvoir de créer, supprimer ou déplacer n’importe quelle réservation ;</li>
              <li className="liCGU">Un professeur est prioritaire sur l’utilisation de la salle : même si aucune réservation n’est faite par l’enseignant, il peut réquisitionner la salle afin d’y faire cours sans passer par l’application ;</li>
              <li className="liCGU">Un étudiant voulant réserver une salle au nom d’une association se verra dans l’obligation de fournir un motif de réservation. L’étudiant en question doit obligatoirement être membre de l’association. Le Bureau de la Vie Étudiante du campus de rattachement de l’association sera alors informé et pourra valider le créneau selon la nature du motif de réservation</li>
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




