import React from 'react';
import './Signup.css';
import Logo from '../../Image/Logo/logo2.png';

const Signup = () => {
    return (
        <div>
            <div className="signup-style">
                <img src={Logo} alt="" />
                <br />
                <br />
                <form>
                    <input className="form-control" type="text" placeholder="Your Name" required />
                    <br />
                    <input className="form-control" type="text" placeholder="Your Email" required />
                    <br />
                    <input className="form-control" type="password" placeholder="Password" required/>
                    <br />
                    <input className="form-control" type="password" placeholder="Confirm Password" required />
                    <br />
                    <input className="form-control btn btn-danger" type="Submit" value="Sign Up" />
                    <br/>
                    <a href="/login">Already have an account?</a>
                </form>


            </div>
        </div>
    );
};

export default Signup;