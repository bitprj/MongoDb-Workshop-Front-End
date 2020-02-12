import React from 'react';
import QuestionList from '../Questions/QuestionsList';
import '../css/Grid-style.css'
import '../css/QuestionPage-style.css'
import { Link } from 'react-router-dom';




class QuestionsPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: [
            'Search for a Movie that is either rated R and was made in 2000, or is unrated and made in 2012. Either way, the movie you are searching for has a run time greater than 150 minutes. The movie also has no metacritic score.', 
            'Search for a Movie that either has  won 0-5 awards or 100-105 awards. The Movie you are looking for was also made in 2015 and has a metacritic score greater than 90. Another thing to note is that the movie is about taxis', 
            'Search for a Movie that was made by TriStar Pictures. The movie you are looking for is rated R, and has a metacritic score of 75.(The difficulty in this part lies in finding how to query Tristar Pictures)', 
            'Search for a Movie that has an IMDB rating greater than or equal to 8.5 and has more than 10,000 votes. The Movie you are looking for is either rated R or rated G and was made in the year 2000. Of the results return to you, the movie you are looking for has a greater metacritic score', 
            'Search for an unrated movie that has a tomatoes viewer rating less than 3 but a imdb rating greater than 7. The Movie you are searching for either has a runtime greater than or equal to 120, or less than or equal to 60. The movie you are looking for is released before the year 2000'],
            answers:['?', '?', '?', '?', '?']
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
                                <li className='list-space'>Use the <b>sample_mflix database</b> to query for documents that answer the questions for this round. Note that you need to use the <b>mflix Collection</b> under the sample_mflix database.</li>
                                
                                <li className='list-space'>If you think you have found the answer to the question, <b>copy and paste the id </b>of the document onto the answer bar and <b>press Enter.</b></li>
                                
                                <li className='list-space'>If the answer is correct, the question bar shall turn green and a question mark at the top of the screen shall be replaced by a letter.</li>
                                
                                <li className='list-space'>When all answers have been correctly answered, all question bars will turn green and the password shall be relieved.</li>
                                
                            </ul>
                            <h3>Difficulty: Hard</h3>
                            <p>You will have to use <b>2 or 3 query operators</b> types in eacch question</p>
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
                        <Link to='/supplies_questions' className='center'>
                            <button className='side-button'>Prev</button>
                        </Link>
                        <Link to='/training_questions' className='center'>
                            <button className='side-button'>Next</button>
                        </Link>
                    </div>
                </div>
                <div className="grid-item_main">
                    <div className="title-container">
                        <h1>Third Round</h1>
                    </div>
                    <div className='Content-container'>
                        <div className="grid-questions">
                            <QuestionList questions={this.state.questions} answers={this.state.answers} url={'/mflix_questions/'} grid_container={'grid-container_password-mflix'} bar_color_open={'training_color_open'} bar_color_closed={'training_color_closed'}/>     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  QuestionsPage;