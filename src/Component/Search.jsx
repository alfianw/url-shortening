import React from "react";
import "../Style/Component-Style/Search.css"

const Search = () =>{
    return(
        <div className="search">
            <div className="cardSearch">
                <input type="text" id="inputSearch" placeholder="Shorten a link here..." />
                <button id="btnSearch">Shorten it!</button>
            </div>
        </div>
    )
}

export default Search;