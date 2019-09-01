import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/main.css';

import EtherNavbar from './components/navbar';
import EtherLogin from './components/login';
import getDefaultState from './core/stateManager';

const EtherContext = React.createContext(getDefaultState());

ReactDOM.render(
    <div>
      <EtherNavbar />
      <EtherLogin />
    </div>,
  document.getElementById('app') as HTMLElement
);