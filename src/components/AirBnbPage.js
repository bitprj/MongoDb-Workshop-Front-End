import React from 'react';
import QuestionList from './Questions/QuestionsList';
import './Questions/Questions-style.css'
import { airbnb } from '../apis/database'



class AirBnbPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3']
            //answers:[]
        }
    }
    
    render(){
        return(
            <div className="container">
                <h1 className="title">Lost and Found game</h1>
                <div></div>
                <QuestionList questions={this.state.questions}/>
            </div>
        )
    }
}

export default AirBnbPage