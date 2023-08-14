import React from "react";
import "../Style/Component-Style/FooterLink.css"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"

const FooterLink = () => {
    return (
        <div className="footerLink">
            <div className="cardFooter">
                <h1>Shortly</h1>
            </div>
            <div className="cardFooter">
                <h4>Features</h4>
                <a href="" id="linkFooter">Link Shortening</a>
                <a href="" id="linkFooter">Branded Links</a>
                <a href="" id="linkFooter">Analytics</a>
            </div>
            <div className="cardFooter">
                <h4>Resources</h4>
                <a href="" id="linkFooter">Blog</a>
                <a href="" id="linkFooter">Developers</a>
                <a href="" id="linkFooter">Support</a>
            </div>
            <div className="cardFooter">
                <h4>Company</h4>
                <a href="" id="linkFooter">About</a>
                <a href="" id="linkFooter">Our Team</a>
                <a href="" id="linkFooter">Careers</a>
                <a href="" id="linkFooter">Contact</a>
            </div>
            <div className="cardFooter1">
                <a href="">
                    <img src={facebook} alt="" id="imgFooter"/>
                </a>
                <a href="">
                    <img src={twitter} alt="" id="imgFooter"/>
                </a>
                <a href="">
                    <img src={pinterest} alt="" id="imgFooter"/>
                </a>
                <a href="">
                    <img src={instagram} alt="" id="imgFooter"/>
                </a>

            </div>
        </div>
    )
}

export default FooterLink