import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Launchpads from './launchpad';
import Mission from './mission';
import Payload from './payload';
import * as serviceWorker from './serviceWorker';

const  routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/launchpads" component={Launchpads} />
            <Route path="/mission" component={Mission} />
            <Route path="/payload/:id" component={Payload} />
        </div>
    </Router>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
