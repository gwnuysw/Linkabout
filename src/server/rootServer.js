import React from 'react';
import ReactDOM from 'react-dom';

import { renderToString } from 'react-dom/server'
import Root from '../components/root'
module.exports = function render(inform) {
  // Model the initial state
  console.log('rootserver inform', inform);
  let content = renderToString(<Root setInform={inform}/>);
  return content;
}
