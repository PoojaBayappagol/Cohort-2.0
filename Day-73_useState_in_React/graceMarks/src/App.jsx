import React from 'react';
import { useState } from 'react';

const App = () => {

  const [marks, setmarks] = useState([60,55,89,29,96])
  const [isClicked, setIsClicked] = useState(false)


  function graceMarks(){
    const newMarks=marks.map(function(elem){
      if(elem>95){
        return elem
      }else{
        return elem+5
      }
    })

    setmarks(newMarks)

    setIsClicked(true)
  }

  return (
    <div>
      {marks.map(function(elem,idx){
        return (<h1 key={idx}>Student {idx+1} = {elem} {(elem>33?"PASS":"FAIL")}</h1>)
      })}

       <button
        onClick={graceMarks}
        style={{
          pointerEvents: isClicked ? "none" : "auto"
        }}
      >
        Give them grace
      </button>
    </div>
  )
}

export default App
