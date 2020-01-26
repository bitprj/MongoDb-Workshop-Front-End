import React from 'react';
import QuestionList from './Questions/QuestionsList';
import './Questions/Questions-style.css'
import { mflix } from '../apis/mflix_database'



class QuestionsPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3'],
            answers:[]
        }
    }

    componentDidMount(){
        this.getAnswerMovie('/mflix_questions/1')
        this.getAnswerMovie('/mflix_questions/2')
        this.getAnswerMovie('/mflix_questions/3')
    }

    getAnswerMovie = async (url) => {
        const response = await mflix.get(url).then((data)=>{
            
        }).catch(error =>{
            this.setState({answers: [...this.state.answers,'Fix the Backend!']})
            console.log(this.state.answers)
        })
    }
    
    render(){
        return(
            <div className="container">
                <h1 className="title">Lost and Found game</h1>
                <div></div>
                <QuestionList questions={this.state.questions} answers={this.state.answers}/>
            </div>
        )
    }
}

export default  QuestionsPage;