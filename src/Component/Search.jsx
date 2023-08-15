import React, { useState } from "react";
import "../Style/Component-Style/Search.css"
import axios from "axios";
import Card from "./Card";

const Search = () => {

    const [link, setLink] = useState("");
    const [result, setResult]= useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post("https://api.shrtco.de/v2/shorten?url="+link)
        .then(response =>{
            setResult(response.data.result);
        })
        .catch(error =>{
            console.error("error shortening link", error)
        });
    }

    console.log(result)

    return (
    <>
        <div className="search">
                <form action="" className="cardSearch" onSubmit={handleSubmit}>
                    <input type="text" value={link} onChange={(e)=> setLink(e.target.value)} id="inputSearch" placeholder="Shorten a link here..."/>
                    <button id="btnSearch" type="submit">Shorten it!</button>
                </form>
        </div>
        {result && <Card shortLink={result}/>}
    </>

    )
}

export default Search;