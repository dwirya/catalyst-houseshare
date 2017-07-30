import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
// import App from './App';
import Homepage from './pages/home/Homepage';
import BrowseHouses from './pages/browse-houses/BrowseHouses';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
        <Router>
        <div>
            <Route exact path="/" component={ Homepage }/>
            <Route path="/browse" component={ BrowseHouses }/>
        </div>
        </Router>
        
    , document.getElementById('root'));
registerServiceWorker();
