import React from 'react';
import "../CSS/Plan.css"

export default class Plan extends React.Component {
    render() {
        return <div class="Plan">
            <iframe name="CarteTPG" src="https://cartographie.u-bordeaux.fr/TPG.html" scrolling="auto" height="700" width="100%" frameborder="no"></iframe>
        </div>
    }
}