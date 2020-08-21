import React from 'react';
import Cookies from 'js-cookie';


class Auth {
    constructor() {
        this._type = 'NewAuthInstance';
    }

    isAuthenticated = (cb) => {
        return Cookies.get("user") === "loginTrue";
    }

    authenticate = (cb) => {
        Cookies.set("user", "loginTrue");
        setTimeout(cb, 100);
    }

    signout = (cb) => {
        Cookies.remove("user");
    }
}


export default new Auth();