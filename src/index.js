import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/BlogPage/BlogPage';
import * as serviceWorker from './serviceWorker';
const Blogdata = require('./mockData/index.json');

ReactDOM.render(<App Blogdata={Blogdata}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
