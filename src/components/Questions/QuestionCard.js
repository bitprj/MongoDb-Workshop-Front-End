import React from 'react';


const QuestionCard = (props) =>{
    return (
        <div className="row">
            {props.question}
        </div>
    )
}

export default QuestionCard;