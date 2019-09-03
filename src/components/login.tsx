import React from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from "jquery";

interface props {
    login: Function
}

interface state {}

export default class EtherLogin extends React.Component<props, state> {
    constructor(props: props) {
        super(props);        
    }

    doLogin() {
        let userName = (document.getElementById('etherUserName') as HTMLInputElement).value;
        let password = (document.getElementById('etherPassword') as HTMLInputElement).value;
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