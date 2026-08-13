import React from 'react'
import Test from './Test.jsx'

const App = () => {

  const users=['Sarthak','Anubhav','Harsh','Dev']
  return (
    <div className='main'>
      <h1>Hello Everyone</h1>
      <Test users={users}/>
    </div>


    
  )
}

export default App
