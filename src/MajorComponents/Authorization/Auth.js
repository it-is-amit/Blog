import React, { useState } from 'react'
// import Homepage from '../Homepage';
import LoginTextFeilds from './LoginTextFeilds'
import SignupTextFeilds from './SignupTextFeilds'
import Interest from './Interest'
import Enterdetails from './Enterdetails'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

export default function Auth({match}) {
    console.log(match.path);
    return (
        <>
           <Router>
                <div className="login-boss-container">
                    <div className="main-container">

                        {/* top and bottom small triangles */}
                        <div className="upper-triangle"></div>
                        <div className="lower-triangle"></div>

                        {/* a big orange rectange */}
                        <div className="orange-rectangle">
                            <h1>Grads</h1>
                        </div>

                        <Switch>
                            <Route path={`${match.path}/`} exact><LoginTextFeilds/></Route>
                            <Route path={`${match.path}/signup`}><SignupTextFeilds/></Route>
                            <Route path={`${match.path}/details`}><Enterdetails/></Route>
                            <Route path={`${match.path}/int`}><Interest/></Route>
                        </Switch>

                    </div>
                    {/* <Link to={`${match.path}/`}>Login</Link>
                    <Link to={`${match.path}/signup`}>sign</Link>
                    <Link to={`${match.path}/int`}>iny=t</Link>
                    <Link to={`${match.path}/details`}>det</Link> */}
                </div>
           </Router>
           

        </>
    )
}
