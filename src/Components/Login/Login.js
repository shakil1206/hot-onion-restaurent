import React from 'react';
import './Login.css';
import Logo from '../../Image/Logo/logo2.png';

const Login = () => {
    return (
        <div className="signup-style second-style">
                <img src={Logo} alt=""/>

                    <form>
                    <input className="form-control input" type="text" placeholder="Your Email" required />
                    <br />
                    <input className="form-control" type="password" placeholder="Password" required/>
                    <br />
                    <input className="form-control btn btn-danger" type="Submit" value="Sign in" />
                    <br/>
                    <a href="/signup">Do not have an account?</a>
                    </form>
        </div>      
    );
};

export default Login;