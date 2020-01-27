import React from 'react';
import './HomePage-style.css'

const HeaderMenu = (props) =>{
    return (
        <div className="masthead">
            {/* <div className="topMenu ui container">
                <div className="ui large secondary inverted pointing menu">
                    <button className="toc item">
                        <button className="item">One</button>
                        <button className="item">Two</button>
                    </button>
                </div>
            </div> */}
            <div className="ui text container">
                {/* <h1 className="title ui inverted header">
                    {props.title}
                </h1> */}
            </div>
            {/* <cdiv className="mongo_background"></cdiv> */}
            <div className="mongo_background"></div>
        </div>
    )
}

export default HeaderMenu