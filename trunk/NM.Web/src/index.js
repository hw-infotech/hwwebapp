import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';

ReactDOM.render(<Provider store={Store}>
    <App /></Provider>, document.getElementById('root'));