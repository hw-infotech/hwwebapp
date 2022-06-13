import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Services/store/store';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={Store}>
    <App />
</Provider>);



