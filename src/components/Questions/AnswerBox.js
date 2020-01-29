import React from 'react'
import '../css/QuestionPage-style.css'

const AnswerBox = (props) =>{
    return(
        <div className="letter_container">
            <h3 className="box">{props.letter}</h3>
        </div>
        
    )
}

export default AnswerBox