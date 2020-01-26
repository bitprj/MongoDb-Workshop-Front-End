import React from 'react';
import QuestionList from './Questions/QuestionsList';
import { Link } from 'react-router';
import './Questions/Questions-style.css'
import axios from 'axios'
import { test } from '../apis/mflix_database'

class QuestionsPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4']
        }
    }
    
    componentDidMount(){
        this.getQuestion()
    }

    getQuestion = async () => {
        const response = await test.get('/mflix_questions/1')
        console.log(response)
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

export default  QuestionsPage;