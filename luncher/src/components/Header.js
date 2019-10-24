import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

    return (
        <div className="page-header">
            <Link to="/"><h2>Luncher</h2></Link>
            <nav>
                <Link to="/">Schools</Link>{" "}
                <Link to="/dashboard">My Dashboard</Link> {" "}
                <Link to="/login">Login</Link> {" "}
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
}

export default Header