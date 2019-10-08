import State from "./models/state";
import { UpdateLocalStorage } from "./localStorage";

const sm = {
    etherReducer: etherReducer,
    defaultState: getDefaultState()
}

function etherReducer(state: State, action: any) {
    switch(action.type) {
        case 'processing':
            return Object.assign({}, state, {
                loading: action.payload,
            });            
        
        case 'login': 
            UpdateLocalStorage(action.payload);
            return Object.assign({}, state, {
                user: action.payload
            })      

        default:
            return state;
    }
}

function getDefaultState():State {
    let state = { 
        loading: false,
        user: {
            loggedIn: false,
            apiToken: "",
            userName: ""
        }
    }
    return state;
}

export default sm;