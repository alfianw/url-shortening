import React from "react";
import '../Style/Component-Style/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navWarp">
                <h1>Shortly</h1>
                <a href="">Fatures</a>
                <a href="">Pricing</a>
                <a href="">Resuorces</a>
            </div>
            <div className="navWarp">
                <button id="btnLogin">Login</button>
                <button id="btnSignup">Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar;