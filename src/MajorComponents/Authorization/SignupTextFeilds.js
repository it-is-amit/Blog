import React from 'react'
import google from '../../images/google.png'

export default function SignupTextFeilds(props) {

    // function for switching the login screen and signup screen
    const switchBetweenLoginSignup = ()=> {
        props.setswitchPages(0);
    }

    return (
        <div className="text-container">
                <div className="wrapper">
                    <h2>Signup</h2>
                </div>
                <div className="wrapper">
                    <div className="continue-with-google">
                        <img src={google} alt="" />
                        <p>Continue with Google</p>
                    </div>
                </div>

                <div className="horizontallyCenter">
                    <h3 style={{color:'grey',fontSize:'14px'}}>Or</h3>
                </div>
                
                <div className="wrapper">
                    <input className="text-feild-input" type="text" placeholder="Enter your E-mail"/>
                </div>

                {/* Email validation paragraph here */}
                <p style={{color:'red',fontSize:'14px',paddingLeft:'3%'}}>Email Validation</p>


                <div className="wrapper">
                    <button className="verify-button">
                        Verify
                    </button>
                </div>
                <div className="wrapper">
                    <div className="horizontallyCenter">
                        <p className="last-line">
                            Already have an account? <strong onClick={switchBetweenLoginSignup}>Login</strong>
                        </p>
                    </div>
                </div>
        </div>
    )
}
