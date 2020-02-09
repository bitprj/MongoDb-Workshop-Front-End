import React from 'react'
import '../css/Grid-style.css'
import '../css/Home-style.css'
import { Link } from 'react-router-dom';

class App extends React.Component{
    constructor () {
        super();
        
    }

    render(){
        return(
            <div className="grid-container_home">
                <div className="grid-item_frame-1">1</div>
                <div className="grid-item_frame-2">2</div>
                <div className="grid-item_frame-3">3</div>
                <div className="grid-item_frame-4">4</div>
                <div className="grid-item_frame-5">5</div>
                <div className="grid-item_center">
                    <div className='button-container_home'>
                        <Link to='/airbnb_questions'>
                            <button className='button_home'>Start</button>
                        </Link>
                        
                    </div>
                </div>
                <div className="grid-item_frame-7">7</div>
                <div className="grid-item_frame-8">8</div>
                <div className="grid-item_frame-9">9</div>
                <div className="grid-item_frame-10">10</div>
                <div className="grid-item_frame-11">11</div>
                <div className="grid-item_frame-12">12</div>
                <div className="grid-item_frame-13">13</div>
            </div>
        )
    }
}

export default App;