import React, { useState } from 'react';
import logo from '../images/Gradslogo.png';
import Notifications from '../SmallComponents/Notifications'
import Chatbox from '../SmallComponents/Chatbox'
import Profile from './Profile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navbar() {

    const [hamburger_Menu_state, sethamburger_Menu_state] = useState(false);
    const [menu_Style, setmenu_Style] = useState({
        width:"0px",
        opacity:0
    })
    const handel_hamburger_menu = () => {
        if(hamburger_Menu_state === false){
            setmenu_Style({
                width:"400px",
                opacity:1
            })
            sethamburger_Menu_state(true)
        }
        else{
            sethamburger_Menu_state(false)
            setmenu_Style({
                width:"0px",
                opacity:0
            })
            setclickedIcon(4)
        }
    }


    // expanded menu funnction for devices withscreen more than 1000px 
    const [clickedIcon, setclickedIcon] = useState(0)
    const chatbox_clicked = () => {
        setclickedIcon(1)
        handel_hamburger_menu()
    }
    
    const notification_clicked = () => {
        setclickedIcon(2)
        handel_hamburger_menu()
    }
    
    const profile_clicked = () => {
        setclickedIcon(3)
        handel_hamburger_menu()
    }
    

   
    // marker slider and bolder font function for mobile navbar
    // 1 for message 2 for notification and 3 for proflie 265 150 30
    const [move, setmove] = useState('265px')
    const a = document.getElementById('noti')
    const b = document.getElementById('chat')
    const c = document.getElementById('pro')
    const notification_clicked_mobile = () => {
        setmove('265px')
        a.style.fontWeight = '600';
        b.style.fontWeight = '400';
        c.style.fontWeight = '400';
    }
    const chatbox_clicked_mobile = () => {
        setmove('150px')
        a.style.fontWeight = '400';
        b.style.fontWeight = '600';
        c.style.fontWeight = '400';
    }
    const profile_clicked_mobile = () => {
        setmove('30px')
        a.style.fontWeight = '400';
        b.style.fontWeight = '400';
        c.style.fontWeight = '600';
    }

    return (
        <>
        <Router>    
            <div className="container navbar-container">
                <Link className="logo" to="/home">
                    <img src={logo} alt="logo"/>
                </Link>

                {/* controls on the right side of the navbar */}
                <div className="contents">
                    <div className="searchbar-Container">
                        <input type="search" id="searchBar" placeholder="Search"></input>
                        <div className="searchButton">
                            <i className="fas fa-search searchIcon"></i>
                        </div>
                    </div>
                    <Link className="navBarIcon" id="messageIcon" onClick={chatbox_clicked} to="/Chatbox">
                        {
                            clickedIcon !== 1 ? <i className="far fa-comment fa-lg"></i> : <i className="fas fa-comment fa-lg"></i>
                        }
                    </Link>
                    <Link className="navBarIcon" id="notifications" onClick={notification_clicked} to="Notifications">
                        {
                            clickedIcon !== 2 ? <i className="far fa-bell fa-lg"></i> : <i className="fas fa-bell fa-lg"></i>
                        }
                    </Link>
                    <Link className="navBarIcon" id="profile" onClick={profile_clicked} to="/Profile">
                        <div className="profilePhoto"></div>
                    </Link>
                </div>



                <div className="ignoreTwo">
                    <div className="hamburgerMenu">
                        <i className="fas fa-search searchIcon"></i>
                    </div>
                    

                    {/* hamburger menu icon, for mobile devices. */}
                    <div className="hamburgerMenu" onClick={handel_hamburger_menu}>
                        {
                            hamburger_Menu_state === false ? <i className="fas fa-bars fa-lg"></i> : <i className="fas fa-times fa-lg"></i>
                        }
                    </div>
                </div>

            </div>


            {/* side menu for notifications messages and profile icons.  */}
            <div className="expanded-menu" style={menu_Style}>
                
                {/* small navbar for mobile devices. */}
                {/* indirect fetching , through expanded menu  */}
                <div className="ignore">
                    {/* a navbar bar for mobile devices, because mobile does not have navbar icons */}
                    <div className="expanded-menu-navbar">
                        <div className="marker" style={{ right:move }}></div>

                        <Link className="icon-base" id="noti" to="/Notifications" onClick={notification_clicked_mobile} style={{fontWeight:'600'}}>
                            Notifications
                        </Link>
                        <Link className="icon-base" id="chat" to="/Chatbox" onClick={chatbox_clicked_mobile}>
                            Messages
                        </Link>
                        <Link className="icon-base" id="pro" to="/Profile" onClick={profile_clicked_mobile}>
                            Profile
                        </Link>
                    </div>
                </div>
 
                    <Switch>
                        <Route path="/Notifications"> 
                            <Notifications/>
                        </Route>
                        
                        <Route path="/Chatbox">
                            <Chatbox/>
                        </Route>

                        <Route path="/Profile">
                            <Profile/>
                        </Route>
                    </Switch>
            </div>
        </Router>
        </>
    )
}
