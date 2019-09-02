import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface props {
    login: Function
}

interface state {}

export default class EtherLogin extends React.Component<props, state> {
    constructor(props: props) {
        super(props);        
    }

    doLogin() {
        let userName = "";
        let password = ""        
        this.props.login(userName, password);
    }
    render() {
        return(
            <div className="card">
                <Form>
                    <Form.Group controlId="etherUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="etherPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.doLogin.bind(this)}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}