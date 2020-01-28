import React from 'react'
// import HiddenMenu from './util/HiddenMenu'
import HeaderMenu from './HomePage/HeaderMenu'
import IntroSegment from './HomePage/IntroSegment';
import './HomePage/HomePage-style.css'

class App extends React.Component{
    constructor () {
        super();
        this.state={
            questions:['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
        }
    }

    render(){
        return(
            <div className="app_container">
                <div className="masthead">
                    <div className="mongo_background"></div>
                </div>
                {/* <HeaderMenu title="MongoDB Workshop"/> */}
                <div className="container">
                    <IntroSegment/>
                </div>
            </div>
        )
    }
}

export default App;