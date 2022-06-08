/**
 * React is a JavaScript library for building user interfaces
 * It is used to build single-page applications.
 * It allows us to create reusable UI components
 * 
 */
//react package holds the react source for components,
// state, props and all the code that is react
import React from 'react';

//Acts as a glue between react and DOM
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
const name = 'George Bush';
const user = {
  firstName:'Acharya',
  lastName: 'Narendra'
};
//JSX- Javascript extension
const element = <h1>Hello, {formatName(user)}</h1>;

function formatName(user){
  return user.firstName + '  '+ user.lastName; 
}
  /**
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/
//Uncaught TypeError: Assignment to constant variable.
//element =<h2>Hello I am changed</h2>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   element
 
); 
