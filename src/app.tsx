import React from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';

import EtherLogin from './components/login';
import EtherNavbar from './components/navbar';
import getDefaultState from './core/stateManager';
import State from "./core/models/state";
import EtherContext from './core/etherContext';


class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = getDefaultState();
    }

    render() {
        return (
            <EtherContext.Provider value={this.state}>
                <div>
                    <EtherNavbar showLoader={this.state.loading} user={this.state.user}/>
                    <EtherLogin login={this.login.bind(this)}/>
                </div>
            </EtherContext.Provider>
        );
    }

    login(userName: String, password: String) {
        this.setState({
            loading: true
        });
        Axios.post('https://maheshtech.com/ether/api/auth', {
            username: userName,
            password: password})
        .then((response: AxiosResponse) => {
            this.setState({
                loading: false,
                user: {
                    apiToken: response.data.token,
                    loggedIn: true,
                    userName: userName
                }
            });
        })
        .catch((err: AxiosError) => {
            console.log(err);
        });
    }
}

export default App;
