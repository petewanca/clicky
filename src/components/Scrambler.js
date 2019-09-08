import React from "react";

function Scrambler(props) {
    
    console.log(props);

    return (
        <div>
            <img
                className="clickMe"
                id={props.id}
                src={props.src}
                alt={props.alt}
            />            
        </div>
    )
}

export default Scrambler;