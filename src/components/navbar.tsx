import React from 'react';
import { Navbar } from 'react-bootstrap';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon icon={ faUser } className="icon-style"/> 
            <span>Login</span>
        </div>
    )
}


export default class EtherNavbar extends React.Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Logo />
                </Navbar.Brand>
                <Loader show={false} />
                <Navbar.Collapse className="justify-content-end">
                    <LoginInfo />
                </Navbar.Collapse>                
            </Navbar>
        );
    }
}