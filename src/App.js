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
// my activities start here;
function Counter(){
  const [count,setCount] = useState(33);
  //Pluse field;
  const Pluse = () =>{
    const newCount = count + 1;
    setCount(newCount);

  }
  const Minus = () =>{
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div className='counterField'>
      <h1>Count:{count}</h1>
      <button onClick={Pluse}>Pluse</button>
      <button onClick={Minus}>Minus</button>
      
    </div>
  )
}








