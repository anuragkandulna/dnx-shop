import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: 'anurag',
    year: 32023
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel='Learn JS' btnText='More...' />
      <Card channel='Testing JS' btnText='Visit me' />
      <Card channel='Testing JS' />
    </>
  )
}

export default App
