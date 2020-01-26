import React from 'react';
import QuestionCard from './QuestionCard';
import './Questions-style.css'

const QuestionList = (props) =>{

   
    const renderList = props.questions.map((question, index)=>{
        return <QuestionCard question={question}  key={index+1} number={index+1} />
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