import React, { useState } from 'react';
import logo from '../images/Gradslogo.png';

export default function Navbar() {

    const [hamburger_Menu_state, sethamburger_Menu_state] = useState(false);
    const [menu_Style, setmenu_Style] = useState({
        width:"0vw",
        opacity:0
    })
    const handel_hamburger_menu = () => {
        if(hamburger_Menu_state === false){
            sethamburger_Menu_state(true)
            setmenu_Style({
                width:"80vw",
                opacity:1
            })
        }
        else{
            sethamburger_Menu_state(false)
            setmenu_Style({
                width:"0vw",
                opacity:0
            })
        }
    }

    return (
        <>
            <div className="container navbar-container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>

                {/* controls on the right side of the navbar */}
                <div className="contents">
                    <div className="searchbar-Container">
                        <input type="search" id="searchBar" placeholder="Search"></input>
                        <div className="searchButton">
                            <i class="fas fa-search searchIcon"></i>
                        </div>
                    </div>
                    <div className="navBarIcon" id="messageIcon">
                        <i className="far fa-comment fa-lg"></i>
                    </div>
                    <div className="navBarIcon" id="notifications">
                        <i className="far fa-bell fa-lg"></i>
                    </div>
                    <div className="navBarIcon" id="profile">
                        <div className="profilePhoto"></div>
                    </div>
                </div>

                {/* hamburger menu icon, for mobile devices. */}
                <div className="hamburgerMenu" onClick={handel_hamburger_menu}>
                    {
                        hamburger_Menu_state === false ? <i class="fas fa-bars fa-lg"></i> : <i class="fas fa-times fa-lg"></i>
                    }
                </div>
            </div>


            {/* expanded menu for mobile devices.  */}
            <div className="expanded-menu" style={menu_Style}>
                <div className="photoandname">
                    <div className="photo"></div>
                    <div className="nameAndEmail">
                        <h5>Mama Yadav</h5>
                        <p>mamayadav@gmail.com</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="menuButton profile">
                    <div className="icon">
                        <i class="fas fa-user-alt"></i>
                    </div>
                    <div className="name">
                        Profile
                    </div>
                </div>
                <div className="menuButton notifications">
                    <div className="icon">
                        <i className="far fa-bell fa-lg"></i>
                    </div>
                    <div className="name">
                        Notifications
                    </div>
                </div>
                <div className="menuButton messages">
                    <div className="icon">
                        <i className="far fa-comment fa-lg"></i>
                    </div>
                    <div className="name">
                        Messages
                    </div>
                </div>
                <div className="menuButton logout">
                    <div className="icon">
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                    <div className="name">
                        Logout
                    </div>
                </div>
            </div>
        </>
    )
}
