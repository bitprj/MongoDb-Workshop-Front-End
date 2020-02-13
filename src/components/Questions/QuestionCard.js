import React from 'react';
import { backend } from '../../apis/database'
import '../css/QuestionPage-style.css'

class QuestionCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            CorrectAnswer: '',
            passwordLetter: '',
            useranswer: '',
            correct:false
        }
        this.collapseSegment = this.collapseSegment.bind(this)
        
        
    }

    componentDidMount(){
        
        const ans = localStorage.getItem(`useranswer${this.props.question}`) ? localStorage.getItem(`useranswer${this.props.question}`) : ''
        this.setState({ useranswer: ans})
        this.getAnswerMovie(this.props.apiLink + this.props.number)
        
    }

    getAnswerMovie = async (url) => {
        
        const response = await backend.get(url).then((data)=>{ 
            this.setState({CorrectAnswer:data.data.correctAnswer,passwordLetter: data.data.answer })
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

    checkWin(e){
        
        e.preventDefault()
        localStorage.setItem(`useranswer${this.props.question}`, this.state.useranswer)
        if(this.state.CorrectAnswer===this.state.useranswer){
            console.log('Hello?')
            this.setState({correct:true}) 
            localStorage.setItem(`correct${this.props.question}`, true )
            this.props.onHandleAnswer(this.state.passwordLetter, this.props.number)
        }
        else{
            console.log('F')
            this.setState({correct:false}) 
            localStorage.setItem(`correct${this.props.question}`, false)
        }
        
    }

    render(){
        let containerState = !this.state.collapse ? `collapsible_bar_container_closed ${this.props.bar_color_closed}
                                                     ${this.state.correct ? 'collapsible_bar_container_closed_true':'collapsible_bar_container_closed_false '}` 
                                                     :  `collapsible_bar_container_open ${this.props.bar_color_closed} 
                                                     ${this.state.correct ? 'collapsible_bar_container_open_true':'collapsible_bar_container_open_false'}`

       
        return (
            <div className="question-bar_container">
                <div className="space">
                    <div className={containerState} onClick={this.collapseSegment}>
                        <div className='collapsible_bar_title'>Question {this.props.number}</div>
                    </div>
                    {this.state.collapse ? 
                        (<div className={`collapsible_bar_content ${this.state.correct ? 'collapsible_bar_content_true' : 'collapsible_bar_content_false'}`}>
                            <span className="question_content">{this.props.question}</span>
                            <form onSubmit = { (e) => this.checkWin(e)}>
                                <input className={'input'} type="text" id="useranswer" placeholder="Enter Answer" value={this.state.useranswer} onChange={ (e) => this.handleAnswerOnChange(e) }/>
                            </form>
                        </div>) 
                        : null}
                </div>
                
            </div>
        )
    }
}

export default QuestionCard;