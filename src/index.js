import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/home/Homepage.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
