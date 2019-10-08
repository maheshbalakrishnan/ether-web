import React from 'react';
import { Jumbotron, Alert } from 'react-bootstrap';

class PageNotFoundError extends React.Component {
    render() {
        return <p>
            <Jumbotron>
                <Alert variant="danger">
                    <h2>Oops! Seems like a dead end</h2>
                    <p>Page not found</p>
                </Alert>                
            </Jumbotron>
        </p>;
    }    
}

export default PageNotFoundError;
