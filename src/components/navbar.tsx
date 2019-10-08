import React, { useContext } from 'react';
import { Navbar, Badge } from 'react-bootstrap';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { EtherContext } from '../core/context';

interface props { }

function Logo() {
    return (
        <img
            alt=""
            src="http://maheshtech.com/images/ether/main-logo-light.svg"
            height="35"
            width="110"
            className="d-inline-block align-top"
        />
    )
}

function Loader(props: any) {
    if (props.show)
        return (
            <div className="loader">
                <div className="lds-css ng-scope">
                    <div style={{ width: '100%', height: '100%' }} className="lds-ellipsis">
                        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div>                            </div>
                    </div>
                </div>
            </div>
        )
    return (<div></div>)
}

function LoginInfo(props: any) {
    return (props.user.loggedIn ?
        (<div className="login-info float-right">            
            <div>
                <Badge className="username-badge" variant="primary">{props.user.userName[0].toUpperCase()}</Badge>
            </div>            
        </div>) :
        (
            <div className="login-info float-right">
                <span>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} className="icon-style icon-user" />
                        <span>Login</span>                        
                    </Link>
                </span>
            </div>
        )
    );  
}

export default function EtherNavbar() {
    const state = useContext(EtherContext);
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>
                    <Logo />
                </Navbar.Brand>
            </Link>
            <Loader show={state.loading} />
            <Navbar.Collapse className="justify-content-end">
                <LoginInfo user={state.user} />
            </Navbar.Collapse>
        </Navbar>
    );    
}