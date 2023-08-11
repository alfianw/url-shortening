import React from "react";
import imgHeader from "../assets/images/illustration-working.svg"
import "../Style/Component-Style/Header.css"
import img from "../assets/images/icon-twitter.svg"

const Header = () => {
    return (
        <header>
            <div className="headerWarp">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <img src={imgHeader} alt="" id="imgHeader" />
        </header>
    )
}

export default Header