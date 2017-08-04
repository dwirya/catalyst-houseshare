import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/rootReducer';

import Homepage from './pages/Homepage';
import BrowseHouses from './pages/BrowseHouses';
import HouseInfo from './pages/HouseInfo';

import AddHouse from './pages/AddHouse';
import StudentRegister from './pages/StudentRegister';


import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(RootReducer)}>
            <Router>
            <div>
                <Route exact path="/" component={ Homepage }/>
                <Route path="/browse" component={ BrowseHouses }/>
                <Route path="/detail" component={ HouseInfo }/>
                <Route path="/add" component={ AddHouse }/>
                <Route path="/student" component={ StudentRegister }/>
            </div>
            </Router>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
