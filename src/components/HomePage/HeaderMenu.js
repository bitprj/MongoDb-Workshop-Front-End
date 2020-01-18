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
            <img className="mongo_background" src="https://files.slack.com/files-pri/TJ2FB5CE9-FSU6EJ6KA/mongodb-bitproject.png" alt="Picture"/>
            
        </div>
    )
}

export default HeaderMenu