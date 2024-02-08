import React from 'react';
import GoogleSignInButton from './GoogleSignInButton';


function Login() {
    return (
        <div>
            <h2>Login</h2>
            <p>Einloggen in das TechStarter LMS.</p>
            <GoogleSignInButton />
        </div>
    );
}

export default Login;
