import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function(){
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      string += "1234567890";
    }
    if (charAllowed) {
      string += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordtoClipboard = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
    <div id = "container">
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} placeholder='password' readOnly ref={passwordRef}/>
        <button onClick={copyPasswordtoClipboard}>Copy</button>
      </div>
      <div id = "controls">
        <div>
          <input type="range" min={8} max={100} id = 'range' value={length} onChange={(e) =>{return setLength(e.target.value)}} />
          <label id='range'>Length: {length}</label>
        </div>
        <div id='numberInput'>
          <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' 
          onChange={() => {setNumberAllowed((prev) => {return !prev})}}/>
          <label>Numbers</label>
        </div>
        <div id='charInput'>
          <input type="checkbox" defaultChecked = {charAllowed} id='charInput' 
          onChange={() => {setCharAllowed((prev) => {return !prev})}}/>
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
