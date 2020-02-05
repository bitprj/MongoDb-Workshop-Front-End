import React from 'react';
import { backend } from '../../apis/database'
import '../css/QuestionPage-style.css'
import AnswerBox from './AnswerBox'
import QuestionList from './QuestionsList';

class QuestionCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            answer: '',
            useranswer: '',
        }
        this.collapseSegment = this.collapseSegment.bind(this)
        
    }

    componentDidMount(){
        this.getAnswerMovie(this.props.apiLink + this.props.number)
        console.log(this.props.apiLink)
        
    }

    getAnswerMovie = async (url) => {
        //console.log(url)
        const response = await backend.get(url).then((data)=>{
            /* this.props.onHandleAnswer('?', data.data.order) */
            this.setState({answer:data.data.answer})   
        }).catch(error =>{
            this.setState({answer: 'Fix the Backend!'})
        })
        
    }

    collapseSegment(event){
        this.setState({collapse:!this.state.collapse})
    }
    
    handleAnswerOnChange(e) {
        this.setState({
          useranswer: e.target.value
        });
      }

    checkWin=(e)=>{
        if(e.key==="Enter"){
        if(this.state.answer==this.state.useranswer){
            this.setState({answer:this.state.useranswer}) 
            this.props.onHandleAnswer(this.state.useranswer, this.props.number)
            console.log("Found!!!"+this.props.number)
            alert("Correct!!")
            }
            else
            alert("Wrong!!")
            console.log(this.state.answer);
        }
    }

    render(){
        let containerState = !this.state.collapse ? `collapsible_bar_container_closed ${this.props.bar_color_closed}` :  `collapsible_bar_container_open ${this.props.bar_color_closed}`
        return (
            <div className="question-bar_container">
                <div className="space">
                    <div className={containerState} onClick={this.collapseSegment}>
                        <div className={`collapsible_bar_title `}>Question {this.props.number}</div>
                    </div>
                    {this.state.collapse ? (<div className={`collapsible_bar_content ${this.props.bar_color_open}`}>
                        <input type="text" id="useranswer" placeholder="Enter Answer" value={this.state.useranswer} onChange={ (e) => this.handleAnswerOnChange(e) } onKeyDown={this.checkWin}/>
                        {/* <button onClick={this.checkWin()}>Submit</button> */}
                            {/* <input placeholder={this.state.answer}/> */}
                            <p>Answer is: {this.state.useranswer}</p>
                        </div>) : null} 
                </div>
                
            </div>
        )
    }
}

export default QuestionCard;