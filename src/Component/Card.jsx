import React, { useState } from "react";
import "../Style/Component-Style/Card.css"

const Card = ({shortLink}) => {

    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopyClick = () => {
      const linkToCopy = shortLink.full_short_link3;
  
      navigator.clipboard.writeText(linkToCopy)
        .then(() => {
          setCopySuccess(true);
        })
        .catch(error => {
          console.error('Error copying text:', error);
        });
    };

    return (
        <div className="containerCard">
            <div className="card">
                <p>Original Link: {shortLink.original_link}</p>
                <p id="linkCard">Short Link: {shortLink.full_short_link3}</p>
                <button onClick={handleCopyClick} id="btnCardLink" className={copySuccess ? "copied" : ""}>{copySuccess ? "Copied!" : "Copy"}</button>
            </div>

        </div>
    )
}

export default Card