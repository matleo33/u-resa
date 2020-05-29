import React from 'react';
import "../CSS/Footer.css"
import { Icon, Grid } from 'semantic-ui-react'

export default class Footer extends React.Component {
    render() {
        return <div className="footer">




            <div></div>


            <div></div>



            <Grid columns={2}>

                <Grid.Column>
                    <div className="icon">
                        <Icon circular name='map marker alternate' size='large'></Icon>
                        <span> 351 Cours de la Libération, 33400 Talence</span>
                        <div></div>
                        <Icon circular name='phone' size='large'></Icon>
                        <span> 05 55 55 55 55</span>
                        <div></div>
                        <Icon circular name='mail' size='large'></Icon>
                        <span> uresa33@gmail.com </span>
                    </div>
                </Grid.Column>

                <Grid.Column>
                    <div className="text">
                        <div>A propos de l'université</div>
                        <div>Cette univesité basée à Bordeaux a formé les plus grands de ce monde</div>
                        <Icon circular name='facebook' size='large'></Icon>
                        <span><Icon circular name='twitter' size='large'></Icon></span>
                        <span><Icon circular name='linkedin' size='large'></Icon></span>
                        <span><Icon circular name='mail' size='large'></Icon></span>
                    </div>
                </Grid.Column>

            </Grid>

        </div>
    }
}