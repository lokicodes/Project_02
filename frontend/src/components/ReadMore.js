import React from 'react' ;
import { useState } from 'react';
import "./ReadMore.css" ;

const ReadMore = ({ children }) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false) ;
    const toggleButton = () => {
        setReadMoreShown(prevState => !prevState) 
    }

    return (
        <div>✒ {" "}
            {isReadMoreShown ? children : children.substr(0,300)} 
            { children.length > 300 &&
                <button onClick={toggleButton} className="btn btn-transparent mx-1 read-more">
                {!isReadMoreShown ? "...READ MORE" : "READ LESS"}
            </button>}
        </div>
    )
}

export default ReadMore;