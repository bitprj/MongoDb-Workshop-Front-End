import React from 'react';
import QuestionList from '../Questions/QuestionsList';
import '../css/Grid-style.css'
import '../css/QuestionPage-style.css'
import { Link } from 'react-router-dom';



class SuppliesPage extends React.Component{
    constructor(){
        super()

        //Avoid questions that ask students to find documents in a certain position. Positions are not fixed on MongoDB Atlas as it seems. 
        this.state = {
            questions: [
                'Search for a sale that was done by a 17 year old in Denver. The Document you are looking for had its sale done online and a coupon was used',
                'Search for a sale that was done in store in Seattle. The customer is a 44 year old female, and she bought 6 items',
                'Search for a sale that had a customer satisfaction less than or equal to 1, and have its customer age be greater than 75. The document you are looking for had their sale done on the phone.',
                'Search for a sale that had a customer\'s email be either kaftija@zaej.ga or fuf@rikav.sl. The document you are looking for would be the one that had the store location be in Seattle',
                'Search for a sale that has a store location either in Seattle or New York, with the customer satisfaction being a 4 and the customer\'s age being 67. The document you are looking for had its sale done online, with its customer being a female.', 
                'Search for a sale that is located in Austin and had a customer of age 59. The purchase was done by phone. The document you are looking for has the lowest customer satisfaction among the documents returned',
                'Search for a sale that is located in San Diego. A coupon was used in the sale, but the customer satisfaction was less than or equal to 3. Out of all the documents ypu found, the document done online is what you are looking for.'
            ],
            //Answer Should be EXPRESS
            answers:['?', '?', '?', '?', '?','?','?']
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
                                <li className='list-space'>Use the <b>sample_supplies database</b> to query for documents that answer the questions for this round. Note that you need to use the <b>sale Collection</b> under the sample_supplies database.</li>
                                
                                <li className='list-space'>If you think you have found the answer to the question, <b>copy and paste the id </b>of the document onto the answer bar and <b>press Enter.</b></li>
                                
                                <li className='list-space'>If the answer is correct, the question bar shall turn green and a question mark at the top of the screen shall be replaced by a letter.</li>
                                
                                <li className='list-space'>When all answers have been correctly answered, all question bars will turn green and the password shall be relieved.</li>
                                
                            </ul>
                            <h3>Difficulty: Normal</h3>
                            <p>You will have to use <b>1 or 2 query operators</b> types in eacch question</p>
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
                        <Link to='/airbnb_questions' className='center'>
                            <button className='side-button'>Prev</button>
                        </Link>
                        <Link to='/mflix_questions' className='center'>
                            <button className='side-button'>Next</button>
                        </Link>
                    </div>
                </div>
                <div className="grid-item_main">
                    <div className="title-container">
                        <h1>Second Round</h1>
                    </div>
                    <div className='Content-container'>
                        <div className="grid-questions">
                            <QuestionList questions={this.state.questions} answers={this.state.answers} url={'/sales_questions/'} grid_container={'grid-container_password-sales'} bar_color_open={'training_color_open'} bar_color_closed={'training_color_closed'}/>     
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuppliesPage