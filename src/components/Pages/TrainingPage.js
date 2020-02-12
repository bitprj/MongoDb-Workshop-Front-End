import React from 'react';
import QuestionList from '../Questions/QuestionsList';

import { Link } from 'react-router-dom';



class TrainingPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
            answers:['?', '?', '?', '?', '?', '?','?']
        }
    }
    
    render(){
        return(
            <div className="grid-container">
                <div className="grid-item_side">
                    <div className='Logo-container'>
                        <h1 className='noMargin'>MongoDB</h1>
                        <h1 className='noMargin'>X</h1>
                        <h1 className='noMargin'>Bit Prj</h1>
                    </div>
                    <div className="Instructions-container">
                        <h1 className='Instructions-title'>Instructions</h1>
                        <div>
                            <h3>How to play:</h3>
                            <ul className= 'list-style'>
                                <li className='list-space'>Use the <b>sample_training database</b> to query for documents that answer the questions for this round. Note that you need to use the <b>company Collection</b> under the sample_training database.</li>
                                
                                <li className='list-space'>If you think you have found the answer to the question, <b>copy and paste the id </b>of the document onto the answer bar and <b>press Enter.</b></li>
                                
                                <li className='list-space'>If the answer is correct, the question bar shall turn green and a question mark at the top of the screen shall be replaced by a letter.</li>
                                
                                <li className='list-space'>When all answers have been correctly answered, all question bars will turn green and the password shall be relieved.</li>
                                
                            </ul>
                            <h3>Difficulty: Super Hard</h3>
                            <p>You will have to use <b>3 to 5 query operators</b> types in eacch question</p>
                            <h1>Tips:</h1>
                            <ul className='list-style'>
                                <li className="list-space">Take note of what you need to query. If what you are looking for is in quotes in MongoDB Atlas, make sure that when you query, it is also in quotes.</li>
                                <li className="list-space">When querying objects, you do <b>NOT</b> need to add quotes to the property</li>
                                <li className="list-space">Read the questions carefully. They should be all you need to know what you are looking for.</li>
                                <li className="list-space">You do not need to use query operators for everyting inside a question. Some parts of the questions are just there to help point you to the right direction.</li>
                                <li className="list-space">Most importantly, please <b>look over a document</b> first before querying to see what you can and cannot query</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid_button-container'>
                        <Link to='/mflix_questions' className='center'>
                            <button className='side-button'>Prev</button>
                        </Link>
                    </div>
                </div>
                <div className="grid-item_main">
                    <div className="title-container">
                        <h1>Fourth Round</h1>
                    </div>
                    <div className='Content-container'>
                        <div className="grid-questions">
                            <QuestionList questions={this.state.questions} answers={this.state.answers} url={'/training_questions/'} grid_container={'grid-container_password-training'} bar_color_open={'training_color_open'} bar_color_closed={'training_color_closed'}/>     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingPage