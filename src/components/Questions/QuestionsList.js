import React from 'react';
import QuestionCard from './QuestionCard';
import './Questions-style.css'

const QuestionList = (props) =>{
    const renderList = props.questions.map((question)=>{
        return <QuestionCard question={question}/>
    })

    return(
        <div className="list ui container">
            <div className="ui grid">
                {renderList}
            </div>
        </div>
    )
}

export default QuestionList;