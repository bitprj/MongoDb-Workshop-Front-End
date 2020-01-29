import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Pages/App';
import QuestionsPage from './components/Pages/MflixPage'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import AirBnbPage from './components/Pages/AirBnbPage';
import TrainingPage from './components/Pages/TrainingPage';


const routing = (
    <Router>
        <div className="home-container">
            <Route exact path="/" component={App} />
            <Route path="/mflix_questions" component={QuestionsPage}/>
            <Route path="/airbnb_questions" component={AirBnbPage}/>
            <Route path="/training_questions" component={TrainingPage}/>
        </div>
    </Router>
    
)

ReactDOM.render(
    routing, document.querySelector('#root')
)