import React from 'react';
import QuestionList from '../Questions/QuestionsList';

import { Link } from 'react-router-dom';



class AirBnbPage extends React.Component{
    constructor(){
        super()

        //Avoid questions that ask students to find documents in a certain position. Positions are not fixed on MongoDB Atlas as it seems. 
        //Easy Mode, no query operators
        this.state = {
            questions: ['Find A Listing with the name \' Cozy House in Ortaköy\' ',
             'Search for listing with the maximum amount of nights you can stay being 10,000. The document you are looking for is the most expensive listing amongst the results that came out', 
             'Search for listing that has a price of $2,000. The Document you are looking for is the listing with the most bedrooms amongst the listings you have found', 
             'Find the listing with the host id of 9036477', 
             'Search for listings that have a security deposit of $10,000. The document you are looking for has the most bathrooms amongst the documents returned.',
             'Search for listings that can accomodate 15 people. The document you are looking for is the listing with the most bedrooms',
             'Search for listings that have guests including 16 poeple. The document you are looking for is the listing with the least amount of accomodations'
            ],
             //Password should be MONGODB
            answers:['?', '?', '?', '?', '?','?', '?']
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
                                <li className='list-space'>Use the <b>sample_airbnb database</b> to query for documents that answer the questions for this round. Note you need to use the <b>listingsAndReviews Collection</b> under the sample_aribnb database.</li>
                                
                                <li className='list-space'>If you think you have found the answer to the question, <b>copy and paste the id </b>of the document onto the answer bar and <b>press Enter.</b></li>
                                
                                <li className='list-space'>If the answer is correct, the question bar shall turn green and a question mark at the top of the screen shall be replaced by a letter.</li>
                                
                                <li className='list-space'>When all answers have been correctly answered, all question bars will turn green and the password shall be relieved.</li>
                                
                            </ul>
                            <h3>Difficulty: Easy</h3>
                            <p>There will be <b>no need for query operators</b> in this round</p>
                            <h1>Tips:</h1>
                            <ul className='list-style'>
                                <li className="list-space">Take note of what you need to query. If what you are looking for is in quotes in MongoDB Atlas, make sure that when you query, it is also in quotes.</li>
                                <li className="list-space">When querying objects, you do <b>NOT</b> need to add quotes to property</li>
                                <li className="list-space">Read the questions carefully. They should be all you need to know what you are looking for.</li>
                                <li className="list-space">You do not need to use query operators for everyting inside a question. Some parts of the questions are just there to help point you to the right direction.</li>
                                <li className="list-space">Most importantly, please <b>look over a document</b> first before querying to see what you can and cannot query</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid_button-container'>
                        <Link to='/' className='center'>
                            <button className='side-button'>Prev</button>
                        </Link>
                        <Link to='/supplies_questions' className='center'>
                            <button className='side-button'>Next</button>
                        </Link>
                        
                        
                    </div>
                </div>
                <div className="grid-item_main">
                    <div className="title-container">
                        <h1>First Round</h1>
                    </div>
                    <div className='Content-container'>
                        <div className="grid-questions">
                            <QuestionList questions={this.state.questions} answers={this.state.answers} url={'/airbnb_questions/'} grid_container={'grid-container_password-airbnb'} bar_color_open={'training_color_open'} bar_color_closed={'training_color_closed'}/>     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AirBnbPage