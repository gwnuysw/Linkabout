import React from 'react';
import ReactDOM from 'react-dom';

import { renderToString } from 'react-dom/server'
import Root from '../components/root'
module.exports = function render() {
  // Model the initial state
  let content = renderToString(<Root />);
  return content;
}
