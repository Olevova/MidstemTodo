import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import { preload } from 'swr'
// import { getTodos, endPoint} from './components/helper/apiTodo'

// preload(endPoint, getTodos)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
