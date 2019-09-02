import React from 'react';
import getDefaultState from './stateManager';

const EtherContext = React.createContext(getDefaultState());

export default EtherContext;