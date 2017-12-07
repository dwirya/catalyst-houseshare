import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/rootReducer';

import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import BrowseHouses from './pages/BrowseHouses';
import ViewHouse from './pages/ViewHouse';
import RegisterHouse from './pages/RegisterHouse';
import RegisterStudent from './pages/RegisterStudent';


import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore)
const customHistory = createBrowserHistory();

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(RootReducer)}>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Homepage }/>
                <Route exact path="/house/browse" component={ BrowseHouses }/>
                <Route exact path="/house/register" component={ RegisterHouse }/>
                <Route path="/house/:slug" component={ ViewHouse }/>
                <Route path="/student/register" component={ RegisterStudent }/>
                <Route path="/about-us" component={ AboutUs }/>
            </Switch>
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
