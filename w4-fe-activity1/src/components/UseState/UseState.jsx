import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const[count, setCount]= useState(0)

function changeToDark() {
    setTheme('dark');
  }

  function changeToLight() {
    setTheme('light');
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    
    <div className={`state ${theme}`}>
      <h1>{theme}</h1>
      <button onClick={changeToDark}>Dark</button>
      <button onClick={changeToLight}>Light</button>

  // Funci
      
      
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


export default UseState;
