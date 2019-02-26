import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server'
import Root from '../components/root';

ReactDOM.hydrate(<Root />, document.getElementById('root'));
