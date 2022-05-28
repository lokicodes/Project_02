import React from 'react' ;
import { useState } from 'react';

const ReadMore = ({ children }) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false) ;
    const toggleButton = () => {
        setReadMoreShown(prevState => !prevState) 
    }

    return (
        <div>
            {isReadMoreShown ? children : children.substr(0,200)} 

            <button onClick={toggleButton} className="btn btn-success mx-1">
                {!isReadMoreShown ? "...READ MORE" : "READ LESS"}
            </button>
        </div>
    )
}

export default ReadMore;