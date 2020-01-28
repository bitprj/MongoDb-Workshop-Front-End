import React from 'react';
import QuestionList from './Questions/QuestionsList';
import './Questions/Questions-style.css'
import { mflix } from '../apis/database'
import { Link } from 'react-router-dom';




class QuestionsPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
            //answers:[]
        }
    }
    
    render(){
        return(
            <div>
            <div className="questionPage_background"></div>
            <div className="container">
            
                <h1 className="title">Lost and Found game</h1>
                
                <div className="ui list container">
                    <QuestionList questions={this.state.questions} url={'/mflix_questions/'} bar_color_open={'training_color_open'} bar_color_closed={'training_color_closed'}/>
                    <div className='button-container'>
                        <div className="ui grid">
                            <div className=" eight column centered row ">
                                <div className="column center">
                                    <Link to="/">
                                        <button className="ui positive button">Prev Page</button>
                                    </Link>
                                </div>
                                <div className="column center">
                                    <Link to="/airbnb_questions">
                                        <button className="ui positive button">Next Page</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default  QuestionsPage;