import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


export default class Infos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Segment placeholder>
                    <Grid columns={1} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                                <Button content='Login' primary />
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

