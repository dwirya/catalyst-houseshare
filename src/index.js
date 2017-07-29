import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Homepage from './pages/home/Homepage';
import BrowseHouses from './pages/browse-houses/BrowseHouses';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowseHouses />, document.getElementById('root'));
registerServiceWorker();
