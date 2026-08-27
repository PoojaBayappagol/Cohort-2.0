import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes(){
    axios.get("http://localhost:3000/notes")

  .then((res)=>{
    setNotes(res.data.notes)
  })

  console.log("helloo worldddd")

  }

  useEffect(()=>{
    fetchNotes()
  },[])


  function handleSubmit(e){
    e.preventDefault()

    const {title,description}=e.target.elements

    console.log(title.value,description.value)


    axios.post("http://localhost:3000/notes",{
      title:title.value,
      description:description.value
    })

    e.target.reset()
    
    .then((res)=>{
      console.log(res.data)

      fetchNotes()
    })


  }

    function handleDeleteNote(noteId){
      axios.delete("http://localhost:3000/notes/"+noteId)

      .then(res=>{
        console.log(res.data)
        fetchNotes()

      })
    }
  


    return (
    <>

      <form className='create-note-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Title' name='title'/>
      <input type="text" placeholder='Enter Description'  name='description'/>
      <button>Create Note</button>
    </form>
   
    <div className='notes'>
      {notes.map((note, index) => {
        return (
          
          <div key={index} className='note'>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
          </div>
        )
      })}
    </div>
      
    </>
  )
}

export default App
