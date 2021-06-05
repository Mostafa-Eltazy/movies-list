import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Vidly</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    <NavLink className="nav-link" to="/rentals">Rental</NavLink>
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                    <NavLink className="nav-link" to="/register">Register</NavLink>
        
                </div>
            </div>
            </div>
        </nav>
    </div>
    )
}

export default NavBar
