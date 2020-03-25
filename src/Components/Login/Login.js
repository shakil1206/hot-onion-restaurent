import React from 'react';
import './Login.css';
import Logo from '../../Image/Logo/logo2.png';
import Auth from '../UseAuth/UseAuth';

const Login = () => {

    const auth = Auth();

    const handleSignIn =()=>{
        auth.singInWithGoogle()
        .then(res=>{
            window.location.pathname="/cart";
        })
    }

    return (
        <div className="signup-style second-style">
                <img src={Logo} alt=""/>

                   
                    <input className="form-control input" type="text" placeholder="Your Email" />
                    <br />
                    <input className="form-control" type="password" placeholder="Password" />
                    <br />
                    <button className="form-control btn btn-danger">Sign in</button>
                    <br/>
                    <a href="/signup">Do not have an account?</a>
                    
                    {
                        auth.user ? <button onClick={auth.signOut} className="form-control btn btn-danger">Sign out</button>
                        : <button onClick={handleSignIn} className="form-control btn btn-danger">Sign in With Google</button>
                    }
        </div>      
    );
};

export default Login;