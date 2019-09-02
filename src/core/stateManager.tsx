import State from "./models/state";

export default function getDefaultState():State {
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