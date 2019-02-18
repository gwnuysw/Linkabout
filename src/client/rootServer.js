import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server'
import Root from '../components/root';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<Root />, document.getElementById('root'));
