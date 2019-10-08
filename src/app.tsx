import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import sm from './core/stateManager';
import { EtherContext, DispatchContext } from './core/context';
import EtherLogin from './components/login';
import EtherNavbar from './components/navbar';
import EtherHome from './components/home';
import PageNotFoundError from './components/pageNotFoundError';
import { GetLocalStorage } from './core/localStorage';

const history = createBrowserHistory();

const PrivateRoute = ({ isLoggedIn, ...props }: any) => {    
    if(isLoggedIn) return <Route {...props} />
    else {
        history.push('/login', {});
        return <Redirect to="/login" />
    }
}

const App = () => {    
    const [state, dispatch] = useReducer(sm.etherReducer, sm.defaultState);
    
    useEffect(() => {
        let user = GetLocalStorage();
        console.log(user);
        dispatch({ type: 'login', payload: user});
        if(user.loggedIn) {
            console.log("Auto login !");
            history.push('/', {});
        }
    }, []);
    
    useEffect(() => {
        if (state.user.loggedIn) {
            history.push('/', {});
        }
    });
    
    return (
        <EtherContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <Router>
                    <div>
                        <EtherNavbar />
                        <Switch>
                            <Route path="/" exact render={ (routeProps) => ( <PrivateRoute isLoggedIn={state.user.loggedIn} component={EtherHome} />) } />
                            <Route path="/login" render={routeProps => (<EtherLogin />)} />
                            <Route component={PageNotFoundError} />
                        </Switch>
                    </div>
                </Router>
            </DispatchContext.Provider>
        </EtherContext.Provider>
    )
}

// const logout = (): void => {
//     dispatch({ type: 'logout' });
// }

export default App;