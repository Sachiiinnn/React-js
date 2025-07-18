import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;
  const addValue = () =>{
    // setCounter(counter + 1)
    // setCounter(counter + 1)   this will increase only one as they update only same counter and make 
    // one batch and repeat same task
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter(function (prevCounter){
     return prevCounter + 1;
    })
    setCounter((prevCounter) =>
     prevCounter + 1)
    
    setCounter(function (prevCounter){ // setcounter gives call back function
     return prevCounter + 1;
    })
    setCounter((prevCounter) =>{
     return prevCounter + 1;
    })
  }
  const removeValue = () =>{
    setCounter(counter = counter - 1)
    // console.log("value removed", counter);
  }
  // const addValue = () =>{
  //   if(counter === "First add counter"){
  //     setCounter(counter = 0);
  //   }
  //   else{
  //     setCounter(counter = counter + 1);
  //   // console.log("value added", counter);
  //   }
  // }
  // const removeValue = () =>{
  //   if(counter === 0){
  //     setCounter("First add counter");
  //   }
  //   else{
  //     setCounter(counter = counter - 1)
  //   }
  //   // console.log("value removed", counter);
  // }
  return (
    <>
    <h1>Sachin</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button><br /><br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
