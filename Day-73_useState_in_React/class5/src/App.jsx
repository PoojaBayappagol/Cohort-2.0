import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  

  return (
    <div className='main'>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Increase</button>

      <button onClick={()=>{
        setNum(num-1)
      }}>Decrease</button>
    </div>
  )
}

export default App
