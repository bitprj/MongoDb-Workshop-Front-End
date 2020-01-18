import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import QuestionsPage from './components/QuestionsPage'
import { Route, BrowserRouter as Router} from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/questions" component={QuestionsPage}/>
        </div>
    </Router>
    
)

ReactDOM.render(
    routing, document.querySelector('#root')
)