import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import reportWebVitals from './reportWebVitals';


const user = {
  firstName: 'John',
  lastName: 'Lee'
}

function display(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (<h1>Hello, {display(user)}!</h1>)

ReactDOM.render(
  // <React.StrictMode>
  //   <Apps />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
