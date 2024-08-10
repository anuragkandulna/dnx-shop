import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState("")

  // Use setPassword later
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (allowNum) str += "0123456789"
    if (allowChar) str += "!@#$%&*?-_"

    for (let i = 1; i <= array.lenth; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)

    }

    // Set password
    setPassword(pass)

  }, [length, allowNum, allowChar])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb4"'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3' 
            placeholder='password' 
            readOnly
            
            />
        </div>
      </div>
      
    </>
  )
}

export default App
