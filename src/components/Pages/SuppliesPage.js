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