import React from 'react';
import QuestionCard from './QuestionCard';
import './Questions-style.css'

const QuestionList = (props) =>{
    var i = 0
    const renderList = props.questions.map((question)=>{
        i++;
        return <QuestionCard question={question} key={i} number={i}/>
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