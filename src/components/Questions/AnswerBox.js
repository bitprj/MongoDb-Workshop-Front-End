import React from 'react'
import './Questions-style.css'

const AnswerBox = (props) =>{
    return(
        <div className="letter_container column">
            <div className="box">{props.letter}</div>
        </div>
        
    )
}

export default AnswerBox