// src/UseEffectTest.jsx
import {useState, useEffect } from 'react';


const UseEffectTest = () => {
   
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
          console.log(`UseEffect3 with interval number ${count} is running`);
        }, 1000);
      }, [count]);
    
      return () => {
        console.log(
          `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
        );
        clearInterval(myInterval);
      };
  

export default UseEffectTest;