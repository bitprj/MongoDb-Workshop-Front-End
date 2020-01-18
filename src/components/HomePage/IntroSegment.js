import React from 'react';
import { Link } from 'react-router-dom';

const IntroSegment = (props) =>{


    return(
        <div className="introSegment ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container ">
                <div className="row centered">
                    <div className="eight wide column">
                        <h1 className="ui header">Instructions</h1>
                        <p>Nostrud minim fugiat quis dolore nisi Lorem sint consectetur adipisicing veniam deserunt laborum anim. Commodo consectetur minim culpa aliqua nisi ea ea amet ad do ea eu. Fugiat exercitation veniam ex sit quis incididunt ut irure incididunt consectetur. Est ut cillum consequat qui sint occaecat cupidatat culpa. Nulla ad excepteur pariatur sunt cillum.</p>
                    </div>
                    <div className="five wide column">
                        <img src="https://image.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1033853617.jpg"/>
                    </div>
                </div>
                <div className="row centered"> 
                    <Link to="/questions">
                        <button className="ui button">
                            Start Game
                        </button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default IntroSegment;

