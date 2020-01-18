import React from 'react';

const HiddenMenu = (props) =>{
    return(
        <div className="ui large top fixed menu transition hidden">
            <div className="ui container">
                <button className="active item">One</button>
                <button className="item">Two</button>
                <button className="item">Three</button>
            </div>
        </div>
    )
}

export default HiddenMenu