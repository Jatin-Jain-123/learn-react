import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter1=1;
  let [counter2, setCounter2] = useState(1);
  const increaseCounter1 = ()=>{
    counter1 = counter1+1;
    console.log(`Updated Value of counter1 is ${counter1}`);
  }
  const decreaseCounter1 = ()=>{
    counter1 = counter1-1;
    console.log(`Updated Value of counter1 is ${counter1}`);
  }
  const increaseCounter2 = ()=>{
    if(counter2>=10){}
    else{
    counter2 = counter2+1;
    setCounter2(counter2);
    console.log(`Updated Value of counter2 is ${counter2}`);
  }
  }
  const decreaseCounter2 = ()=>{
    if(counter2<=0){
    }else{
    setCounter2(counter2-1);
    console.log(`Updated Value of counter2 is ${counter2}`);
    // setState is asynchronous , which causes the mismatch between UI and console values
  }
  }
  return <>
  <h1>Counter 1: {counter1}</h1>
  <h1>Counter 2 : {counter2}</h1>
  <button onClick= {increaseCounter1}>Increase Counter 1</button>
  <button onClick= {decreaseCounter1}>Decrease Counter 1</button>
  <button onClick= {increaseCounter2}>Increase Counter 2</button>
  <button onClick= {decreaseCounter2}>Decrease Counter 2</button>
  </>
  
}

export default App
