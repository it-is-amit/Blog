import React, { useState } from 'react'
import Enterdetails from './Enterdetails';
import Interest from './Interest';
import LoginTextFeilds from './LoginTextFeilds'
import SignupTextFeilds from './SignupTextFeilds'

export default function Auth() {

    // declaring numbers for each page during authentication
    // 0-login , 1-signup , 2-enter details and any other number - Choose interest
    const [switchPages, setswitchPages] = useState(1);

    return (
        <div className="login-boss-container">
            <div className="main-container">

                {/* top and bottom small triangles */}
                <div className="upper-triangle"></div>
                <div className="lower-triangle"></div>

                {/* a big orange rectange */}
                <div className="orange-rectangle">
                    <h1>Grads</h1>
                </div>

                {/* using same layout for external container, and using signupTextFeilds component for signup and loginTextFeilds for login*/}
                { switchPages === 0 ? <LoginTextFeilds setswitchPages={setswitchPages}/> 
                : switchPages === 1 ? <SignupTextFeilds setswitchPages={setswitchPages}/>
                : switchPages === 2 ? <Enterdetails/>
                : <Interest/>
            }

            </div>
        </div>
    )
}
