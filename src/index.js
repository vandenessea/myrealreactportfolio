import React from 'react';
import ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import App from './App';


// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
ReactDOM.render(<App />, document.getElementById('root'));



