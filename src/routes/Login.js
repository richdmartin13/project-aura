import React from 'react';
import {useEffect, useState} from 'react';

export default function Login({auth, color}) {
    const AUTH_URL = `${auth.auth_url}?client_id=${auth.client_id}&response_type=${auth.response_type}&redirect_uri=${auth.redirect_uri}&scope=${auth.scope}`;
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
            
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setToken(token);
            window.history.pushState({}, null, "/")
            window.location.reload();
        }

    })
    
    return (
        <div style={{
            width: '100%',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="login-container">
                <h1>Start Broadcasting<br/>in Minutes.</h1>
                <a className="btn btn-primary" href={AUTH_URL} style={{backgroundColor: color}}>Login with Spotify</a>
            </div>
        </div>
    )
}