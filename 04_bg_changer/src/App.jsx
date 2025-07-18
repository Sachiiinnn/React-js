import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("")

  return (
    <>
    <div className= "w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-4 bg-white rounded-3xl px-3 py-2'>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('red')}} style={{backgroundColor: 'Red'}}>Red</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('green')}} style={{backgroundColor: 'Green'}}>Green</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('blue')}} style={{backgroundColor: 'Blue'}}>Blue</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('olive')}} style={{backgroundColor: 'olive'}}>Olive</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('gray')}} style={{backgroundColor: 'Gray'}}>Gray</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('yellow')}} style={{backgroundColor: 'Yellow'}}>Yellow</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('pink')}} style={{backgroundColor: 'pink'}}>Pink</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('purple')}} style={{backgroundColor: 'Purple'}}>Purple</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('lavender')}} style={{backgroundColor: 'Lavender'}}>Lavender</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('white')}} style={{backgroundColor: 'white', color: 'black'}}>White</button>
          <button className='text-white outline-none px-2 py-1 rounded-full shadow-xl/20 ' onClick={function(){return setColor('black')}} style={{backgroundColor: 'black'}}>Black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
