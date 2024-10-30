import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

                        < NavLink to="/" className="nav-link" activeclassName="active" area-current="page">Home</NavLink>
                        < NavLink to="/profile" className="nav-link" activeclassName="active" area-current="page">Profile</NavLink>
                        < NavLink to="/contact" className="nav-link" activeclassName="active" area-current="page">Contact Us</NavLink>
                    
                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default Nav;