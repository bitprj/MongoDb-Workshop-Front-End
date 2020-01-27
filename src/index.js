import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import QuestionsPage from './components/MflixPage'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import AirBnbPage from './components/AirBnbPage';
import TrainingPage from './components/TrainingPage';

const routing = (
    <Router>
        <div>
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