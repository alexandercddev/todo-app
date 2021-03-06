import React from 'react';
import ReactDOM from 'react-dom'; 
import ToDoApp from './components/ToDoApp';
import reportWebVitals from './reportWebVitals';
import './assets/sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
