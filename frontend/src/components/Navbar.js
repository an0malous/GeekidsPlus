import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = ({ username, loggedIn, handleLogout, admin }) => {
    console.log(loggedIn)
    return (
        
        <div>
            <div style={{background: "rgba(0,0,0,0.7)"}} className="ui pointing menu">
                <a className="active item">
                <Link to={"/"} className="nav-link">Home</Link>
                </a>
                <a className="item">
                    FlashCards
                </a>
                <a className="item">
                    <Link to="/phonics" className="nav-link">Phonics</Link>
                </a>
                {admin ? (<a className="item">
                <Link to={"/admin"} className="nav-link">Admin Panel</Link>
                </a>): (null)}
                <div>
                    <div>{loggedIn ? `You're logged in as: ${username}` : "Not Logged in"}</div> <div><button onClick={handleLogout}>{loggedIn ? "Logout" : "Login"}</button></div>
                </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
