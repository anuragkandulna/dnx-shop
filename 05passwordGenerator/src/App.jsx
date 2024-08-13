import { useState, useCallback, useEffect } from 'react'

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

      pass += str.charAt(char)

    }

    // Set password
    setPassword(pass)

  }, [length, allowNum, allowChar, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowNum, allowChar, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center m-3'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb4"'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 rounded-md' 
            placeholder='password' 
            readOnly
            />
          <div className='py-1'></div>
          <button className='rounded-md outline-none bg-blue-700 text-white px-3 py-1'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='curser-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allowChar}
              id="charInput"
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
