import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <div className="mx-auto d-flex justify-content-between" style={{ width: '400px' }}>
                        <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">Home</NavLink>
                        <NavLink to="/profile" className="nav-link" activeClassName="active" aria-current="page">Profile</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active" aria-current="page">Contact Us</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active" aria-current="page">About Us</NavLink>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
    
};

export default Nav;