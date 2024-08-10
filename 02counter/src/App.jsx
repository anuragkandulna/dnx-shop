import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Give default value as anything like num, str, etc.
  // counter is variable name, setCounter is function to update value by react all the places.
  let [counter, setCounter] = useState(5) 

  // let counter = 15

  const addValue = () => {

    // This repetition wont work because React useState() updates the values in batches and
    // if repetition is found then it conconsiders the same work and send it in a single batch,
    // hence value is 5 and not 8. This is feature of fibre that gives more control over the passed value.
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)


    // To do the repeated updates, fetch the previous counter value and increment on top of it. 
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)


    // if (counter < 20) {
    //   counter = counter + 1
    //   setCounter(counter)
    //   console.log('Updated value after increment: ', counter)
    // }
    // else {
    //   console.log('Cannot increment more.')
    // }
  }

  const removeValue = () => {
    // if (counter > 0) {
    //   setCounter(counter - 1) 
    //   console.log('Updated value after decrement: ', counter)
    // }
    // else {
    //   console.log('Cannot decrement further.')
    // }
    
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
