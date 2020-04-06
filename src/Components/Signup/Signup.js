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
               
                    <input name="name" className="form-control" type="text" placeholder="Your Name" />
                    <br />
                    <input name="email"  className="form-control" type="text" placeholder="Your Email"  />

                    <br />
                    <input name="password" className="form-control" type="password" placeholder="Your Password" />

                    <br />
                    <input name="confirmPassword" className="form-control" type="password" placeholder="Confirm Password" />
                        <br />
                    <button className="form-control btn btn-danger" > Sign up </button>
                    <br />               
                    <a href="/login">Already have an account or Sign up Google?</a>



            </div>
        </div>
    );
};

export default Signup;