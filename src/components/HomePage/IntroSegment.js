import React from 'react';

const IntroSegment = () =>{
    return(
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container ">
                <div className="row centered">
                    <div className="eight wide column">
                        <h1 className="ui header">Instructions</h1>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="two wide column">
                        <h1>Picture that could help users</h1>
                    </div>
                </div>
                <div className="row centered"> 
                    <button className="ui button">Start game</button>
                </div>
            </div>
            
        </div>
    )
}

export default IntroSegment;

