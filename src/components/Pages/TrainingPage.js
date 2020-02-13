import React from 'react';
import QuestionList from '../Questions/QuestionsList';

import { Link } from 'react-router-dom';


//{$or:[{acquisition.acquiring_company.name:"Microsoft", "total_money_raised": "$0", acquisition.acquired_year:{$gt: 2011}},{acquisition.acquiring_company.name:"Amazon", acquisition.price_currency_code:{$ne:"USD"}}]}
//{$or:[{"founded_year": {$gte: 2010},acquisition.acquired_year:{$ne: 2012}, "number_of_employees":50 }, {"founded_year":{$lt: 2000}, acquisition.acquired_year:{$gt: 1990}, "number_of_employees":10}]}
// {$or:[{"category_code": "web", "founded_year": {$gte:2007, $lt:2012}, "founded_month":{$gt: 6, $lte: 10}, "number_of_employees":0}, {"category_code":"network_hosting", "founded_year":{$gt: 1999, $lte: 2005}, "founded_month": {$lt:6, $gte:2 }, "number_of_employees":{$gt: 200 $ne: 260}}]}
// {$or:[{acquisition.acquiring_company.name:"Google",acquisition.term_code:{$ne:"stock"},acquisition.price_amount:{$gte:60000000}, "category_code": "mobile"},{acquisition.acquiring_company.name:"IBM", acquisition.term_code: {$ne:"cash"},acquisition.price_amount:{$gte:300000000}, "category_code": "network_hosting"}]}
class TrainingPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: [
                'Search for a company that was acquired either by Microsoft or Amazon. If it was acquired by Microsoft, the total money raised would be $0 and the year the company was acquired was past 2011. If it was acquired by Amazon, the price currency code used cannot be USD.',
                'Search for a company that was founded either before the year 2000 or after the year 2009. If the year the company was founded was before the year 2000, it was acquired by a diffferent company after 1990 and had a total of 10 employees. If the year the company was founded was after the year 2010, it was not acquired by a different company on 2012 and had a total of 50 employees',
                'Search for a company that either has a category code of "web" or "network_hosting". If it has a category code of web, then it was founded in between the year 2007-2011, with the month it was founded in between July and October. The company also has no employees. If the category code is netowrk hosting, then it was founded in between the years 2000 and 2005, with it being founded in between February and May. This company also has more than 200 employees, but it cannot have 260 employees. The document you are looking for is the only document that does not have the same category code returned from your query.',
                'Search for a company that was acquired either by IBM or Google. If the company was acquired by IBM, then the term code is not cash, the acquisition price amount is greater than or equal to 300000000 and the category code is "network_hosting". If the company was acquired by google, then the term code is not stock, the acquisition price amount is greater than or equal to 60000000 and the category code is "mobile". Of what is returned, the document you are looking for has a later acquisition year.', 
                ],
            answers:['?', '?', '?', '?']
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

                                <li className='warning-text'><b>Don't refresh the page, or risk losing progress of your work</b></li>
                                
                            </ul>
                            <h3>Difficulty: Super Hard</h3>
                            <p>You will have to use <b>3 to 5 query operators</b> types in each question</p>
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
                        <h1 className="warning">DO NOT REFRESH PAGE</h1>
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