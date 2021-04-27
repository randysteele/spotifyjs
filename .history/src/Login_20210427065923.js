import React, { Component } from 'react';
import './Login.css'
import { loginUrl } from "/"

class Login extends Component {
    render() {
        return (
            <div class="login">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
                <a href={loginUrl}>Login with Spotify</a>

            </div>
        );
    }
}

export default Login;