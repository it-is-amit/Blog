import React, { useState } from 'react';
import google from '../../images/google.png';

export default function LoginTextFeilds(props) {

    const [passwordVisiblity, setPasswordVisiblity] = useState('password')
    
    // function for showing and hiding the password
    const changeVisiblity = ()=> {
        if(passwordVisiblity === 'password'){
            setPasswordVisiblity('text')
        }
        else{
            setPasswordVisiblity('password')
        }
    }

    // function for switching the login screen and signup screen
    const switchBetweenLoginSignup = ()=> {
        props.setswitchPages(1);
    }

    return (
        <div className="text-container">

            <div className="wrapper">
                <h2>Login</h2>
            </div>

            <div className="wrapper">
                <input className="text-feild-input" type="text" placeholder="Enter your E-mail"/>
            </div>
            
            <div className="wrapper">
                {/* for showing and hiding the password */}
                {passwordVisiblity === 'text' ? <i className="fas fa-eye fa-sm eye-icon-css" onClick={changeVisiblity}></i> : <i class="fas fa-eye-slash fa-sm eye-icon-css" onClick={changeVisiblity}></i>}

                <input className="text-feild-input" type={passwordVisiblity} placeholder="Password"/>
            </div>

            {/* any error occured during authorization */}
            <p style={{color:'red',fontSize:'14px',paddingLeft:'3%'}}>Incorrect Password please check and type again</p>

            <div className="wrapper">
                <button className="verify-button">
                    Login
                </button>
            </div>

             <div className="horizontallyCenter">
                <h3 style={{color:'grey',fontSize:'14px'}}>Or</h3>
            </div>
                

            <div className="wrapper">
                    <div className="continue-with-google">
                        <img src={google} alt="" />
                        <p>Continue with Google</p>
                    </div>
                </div>

            <div className="wrapper">
                <di className="horizontallyCenter">
                    <p className="last-line">
                        New to GRADS? <strong onClick={switchBetweenLoginSignup}>Signup</strong> here
                    </p>
                </di>
            </div>

        </div>
    )
}
