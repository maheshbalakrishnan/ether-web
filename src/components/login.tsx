import React, { useContext } from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { Form, Button } from 'react-bootstrap';
import { DispatchContext, EtherContext } from './../core/context';
import { UpdateLocalStorage } from '../core/localStorage';
import { Redirect } from 'react-router';

interface props { }

export default function EtherLogin(props: props) {
    const dispatch = useContext(DispatchContext);
    const state = useContext(EtherContext);

    function doLogin() {
        let userName = (document.getElementById('etherUserName') as HTMLInputElement).value;
        let password = (document.getElementById('etherPassword') as HTMLInputElement).value;
        // spin the spinner
        dispatch({ type: 'processing', payload: true });

        // do the REST call to server 
        Axios.post('https://maheshtech.com/ether/api/auth', {
            username: userName,
            password: password
            })
            .then((response: AxiosResponse) => {
                dispatch({ type: 'processing', payload: false });
                dispatch({
                    type: 'login', payload: {
                        apiToken: response.data.token,
                        loggedIn: true,
                        userName: userName
                    }
                });
            })
            .catch((err: AxiosError) => {
                dispatch({ type: 'processing', payload: false });
                console.log(err);
            });        
    }

    if(state.user.loggedIn) {
        return <Redirect to="/" />
    }
    
    return (
        <div className="card-container">
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
                    <Button variant="primary" type="button" onClick={() => doLogin()}>Login</Button>
                </Form>
            </div>
        </div>
    );

}