import React from 'react';
import QuestionCard from './QuestionCard';
import './Questions-style.css'
import AnswerBox from './AnswerBox'

class QuestionList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            answers:['?', '?', '?']
        }

        //console.log(this.props.url)
        //this.answerList = this.answerList.bind(this)
    }

    renderList = this.props.questions.map((question, index)=>{
       
        return <QuestionCard question={question} apiLink={this.props.url} onHandleAnswer={this.handleAnswer.bind(this)} key={index+1} number={index+1} />
    })

    

    //answer should be a single letter
    handleAnswer (answer, num){
        let items=[...this.state.answers]
        items[num-1]=answer
        // console.log(items)
        this.setState({answers:items})
        //console.log(this.state.answers)
    }

    render(){

        const answerList = this.state.answers.map((answer, index)=>{
            return <AnswerBox letter={answer} key={index}/>
        })

        return(
            <div>
                <div className="ui grid">
                    <div className=" center aligned five row centered"> 
                        {answerList}
                    </div>
                </div>
                <div className="ui grid">
                    {this.renderList}
                </div>
            </div>
        )
    }
}

//Probably wont need this, but keeping it just in case for now
// const QuestionList = (props) =>{

   
//     const renderList = props.questions.map((question, index)=>{
//         return <QuestionCard question={question}  key={index+1} number={index+1} />
//     })

    

//     return(
//         <div className="list ui container">
//             <div className="ui grid">
//                 {renderList}
//             </div>
//         </div>
//     )
// }

export default QuestionList;