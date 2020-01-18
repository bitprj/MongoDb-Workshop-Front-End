import React from 'react';
import './HomePage-style.css'

const HeaderMenu = (props) =>{
    return (
        <div className="ui inverted vertical masthead center aligned segment">
            {/* <div className="topMenu ui container">
                <div className="ui large secondary inverted pointing menu">
                    <button className="toc item">
                        <button className="item">One</button>
                        <button className="item">Two</button>
                    </button>
                </div>
            </div> */}
            <div className="ui text container">
                <h1 className="title ui inverted header">
                    {props.title}
                </h1>
            </div>
        </div>
    )
}

export default HeaderMenu