import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App baseUrl="http://192.168.1.103:8060/"/>, document.getElementById('root'));
registerServiceWorker();
