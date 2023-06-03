import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import db from "./ConnectDB";


function CreateTaskForm() {
  //state for the task title
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(collection(db, 'tasks'),
      {
        title,
        created: Timestamp.now()
      }).then(r => console.log(r))
      .catch(err => console.log(err))
    setTitle('')
  }

  return (
    <form className="input-group mb-3">
      <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>Add task</button>
    </form>
  )
}

export default CreateTaskForm