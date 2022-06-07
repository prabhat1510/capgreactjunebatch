import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
/**
 * 
 * Components are like functions that return HTML elements
 * 
 */
function App() {
  //Other logic you can write it here
  return (
    <div className="App">
      <p>Components are like functions that return HTML elements</p>
      <p>Hi I am a function component</p>
      <p>Components are independent and resuable bits of code. They serve the same purpose as Javascript functions but work in isolation and return HTML</p>
      <p>Components come in 2 types , Class components and Function components</p>
      <Car />
    </div>
  );
}

export default App;
