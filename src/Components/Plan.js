import React from 'react';
import "../CSS/Plan.css"

export default class Plan extends React.Component {
    render() {
        return <div class="Plan">
            <div>
                <p>Ici se trouve le plan de la fac</p>
            </div>
            <img className="PlanImg" src="https://www.ism.u-bordeaux.fr/IMG/jpg/plan-2.jpg" alt="plan de la fac" />
        </div>
    }
}

export default Plan;