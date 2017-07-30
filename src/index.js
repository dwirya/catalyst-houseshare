import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/rootReducer';

import Homepage from './pages/home/Homepage';
import BrowseHouses from './pages/browse-houses/BrowseHouses';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(RootReducer)}>
            <Router>
            <div>
                <Route exact path="/" component={ Homepage }/>
                <Route path="/browse" component={ BrowseHouses }/>
            </div>
            </Router>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
