import React from 'react';
import { Navbar, Badge } from 'react-bootstrap';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from '../core/models/user';
import { Link } from 'react-router-dom';

interface props {
    showLoader: Boolean,
    user: User | null
}

interface state {

}

function Logo() {
    return (
        <img
            alt=""
            src="http://maheshtech.com/images/ether/main-logo-light.svg"
            height="35"
            width="150"
            className="d-inline-block align-top"            
        />
    )
}

function Loader(props: any) {
    if(props.show)
        return (
            <div className="loader">
                <div className="lds-css ng-scope">
                    <div style={{width: '100%', height:'100%'}} className="lds-ellipsis">
                        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div>                            </div>
                    </div>
                </div>
            </div>
        )
    return (<div></div>)
}

function LoginInfo(props: any) {
    return (
        <div className="login-info float-right">
            <span>
                {   props.user.loggedIn ? 
                        <div>
                            <Badge className="username-badge" variant="primary">{ props.user.userName[0].toUpperCase() }</Badge>
                        </div> : 
                        <Link to="/login">
                            <FontAwesomeIcon icon={ faUser } className="icon-style icon-user"/> 
                            <span>Login</span>
                        </Link>
                }
            </span>
        </div>
    )
}

export default class EtherNavbar extends React.Component<props, state> {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to="/">
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                </Link>
                <Loader show={this.props.showLoader} />
                <Navbar.Collapse className="justify-content-end">
                    <LoginInfo user={this.props.user} />
                </Navbar.Collapse>                
            </Navbar>
        );
    }
}