// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username : "Sachin",
    age : 30
  }
  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-2' >Tailwind Test</h1>
    <Card username = "Richa" object = {myObj} arr = {newArr} button = "Sachin"/><br/>
    <br/>
    <Card username= "Sachin" />
    </>
  )
}

export default App
