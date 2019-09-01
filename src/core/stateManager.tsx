import State from "./models/state";
import User from "./models/user";

export default function getDefaultState():State {
    let state = new State();
    state.loading = false;
    
    let user = new User();
    user.loggedIn = false;
    user.apiToken = "";
    user.userName = "";

    state.user = user;

    return state;
}