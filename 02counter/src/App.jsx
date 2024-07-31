import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Give default value as anything like num, str, etc.
  // counter is variable name, setCounter is function to update value by react all the places.
  let [counter, setCounter] = useState(15) 

  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log('Updated value after increment: ', counter)
  }

  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter - 1) 
    console.log('Updated value after decrement: ', counter)
  }

  return (
    <>
      <h1>Learning React JS 2</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
