import React, { useReducer } from 'react';
import sm from './stateManager';
import State from './models/state';

export const EtherContext = React.createContext<State>(null);
export const DispatchContext = React.createContext(null);