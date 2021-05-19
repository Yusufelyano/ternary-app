import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const time = 17;


ReactDOM.render(
  <React.StrictMode>
    <App time={time} />
  </React.StrictMode>,
  document.getElementById('root')
);

