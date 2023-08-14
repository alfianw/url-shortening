import React from "react";
import "../Style/Component-Style/Detail.css"
import brand from "../assets/images/icon-brand-recognition.svg"
import detailed from "../assets/images/icon-detailed-records.svg"
import working from "../assets/images/icon-fully-customizable.svg"
import Search from "../Component/Search";

const Detail = () => {
    return (
        <div className="detail">
            <Search />
            <div className="line"></div>
            <div className="containerDetail1">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our Advanced statistics dashboard.</p>
            </div>
            <div className="containerDetail2">
                <div className="cardDetail1" id="card1">
                    <div className="warpImg">
                        <img src={brand} alt="" id="imgDetail" />
                    </div>
                    <h1>Brand Recognition</h1>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="cardDetail1" id="card2">
                    <div className="warpImg">
                        <img src={detailed} alt="" id="imgDetail" />
                    </div>
                    <h1>Detailed Records</h1>
                    <p>Gain insights into who is clicking your links. Knowing when and where people angage with your content helps inform better decisions.</p>
                </div>
                <div className="cardDetail1" id="card3">
                    <div className="warpImg">
                        <img src={working} alt="" id="imgDetail" />
                    </div>
                    <h1>Fully Customizable</h1>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Detail