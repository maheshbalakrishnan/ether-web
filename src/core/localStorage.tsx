import User from "./models/user";

export const UpdateLocalStorage = (user: User): void => {
    localStorage.setItem('userName', user.userName.toString());
    localStorage.setItem('apiToken', user.apiToken.toString());    
}

export const GetLocalStorage = (): User => {
    let userName = localStorage.getItem('userName');
    let apiToken = localStorage.getItem('apiToken');
    if (userName !== null && userName !== "") {
        return {
            userName: userName,
            apiToken: apiToken,
            loggedIn: true
        }
    }
    return {
        userName: '',
        apiToken: '',
        loggedIn: false
    }
}