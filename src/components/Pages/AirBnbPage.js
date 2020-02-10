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
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked 
                            up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites of the word in classical literature, discovered the undoubtable
                            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
                            treatise on the theory of ethics, very popular during the Renaissance. The first line
                            of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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