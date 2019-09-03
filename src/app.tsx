import React from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EtherLogin from './components/login';
import EtherNavbar from './components/navbar';
import getDefaultState from './core/stateManager';
import State from "./core/models/state";
import User from './core/models/user';
import EtherContext from './core/etherContext';
import EtherHome from './components/home';

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = getDefaultState();
    }

    render() {
        return (
            <EtherContext.Provider value={this.state}>
                <Router>                
                    <div>
                        <EtherNavbar showLoader={this.state.loading} user={this.state.user}/>
                        <Route exact path="/" component={EtherHome} />
                        <Route path="/login" render={ routeProps => ( 
                            <EtherLogin login={this.login.bind(this)}/>
                        )} />
                        
                    </div>
                </Router>
            </EtherContext.Provider>
        );
    }

    updateLocalStorage(user: User): void {
        localStorage.setItem('userName', this.state.user.userName.toString());
        localStorage.setItem('apiToken', this.state.user.apiToken.toString());        
    }

    getLocalStorage(): User {
        let userName = localStorage.getItem('userName');
        let apiToken = localStorage.getItem('apiToken');
        if(userName && userName !== "") {
            return {
                userName: userName,
                apiToken: apiToken,
                loggedIn: true
            }
        }
        return {
            userName: '',
            apiToken: '',
            loggedIn: false
        }
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
            }, () => {
                
            });            
        })
        .catch((err: AxiosError) => {
            console.log(err);
        });
    }

    logout() {
        this.setState({
            loading: false,
            user: {
                apiToken: '',
                loggedIn: false,
                userName: ''
            }
        }, () => {
            this.updateLocalStorage(this.state.user);
        }); 
    }

    componentDidMount() {
        let user = this.getLocalStorage();
        if(user.loggedIn) this.setState({
            user: user
        });
    }
}

export default App;
