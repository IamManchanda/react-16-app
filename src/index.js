import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
