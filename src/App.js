import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

class App extends Component {

  
  render() {
    
    return (
      <div className="App"> 
      <Counter></Counter>
      </div>
    );
  }
}
export default App;

// start here;
function Counter(){

const [count,setCount] = useState(0);
const increaseCount = () =>{
  const newCount = count + 1;
  setCount(newCount);
}
const decreaseCount = () =>{
  const newCount = count - 1;
  setCount(newCount);
}

  return(
    <div className='countField'>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}








