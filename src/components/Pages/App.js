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
            <div className='grid-item_center'>
                <div className='button-container_home'>
                        <Link to='/airbnb_questions'>
                            <button className='button_home'>
                                <span className='button-title'>Start</span>
                            </button>
                        </Link>
                        
                    </div>
            </div>
            
            
        )
    }
}

export default App;