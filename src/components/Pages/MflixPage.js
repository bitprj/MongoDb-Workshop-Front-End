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