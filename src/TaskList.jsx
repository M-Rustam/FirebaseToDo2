import db from "./ConnectDB";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";

function TaskList(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasksColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(tasksColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  }, [])
  const onDeleteTask = (id) => {
    deleteDoc(doc(db, 'tasks', id))
      .then(r => console.log(r))
      .catch(err => console.log(err))
  }
  const onToggleDone = (id) => {
    const task = tasks.find(task => task.id === id)
    const updatedTask = { ...task, completed: !task.completed }
    //update task in firestore
    updateDoc(doc(db, 'tasks', id), updatedTask)
      .then(r => console.log(r))
      .catch(err => console.log(err))
  }

  return (
    <ul className="list-group">{tasks.map(task => (
      <li className="list-group-item" key={task.id}>
        <div className="row">
          <div className="col-8">
            {task.completed ? <s> {task.title} </s> : task.title}
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-secondary"
              onClick={() => onDeleteTask(task.id)}>Delete</button>
            <button type="button" className="btn btn-outline-secondary"
              onClick={() => onToggleDone(task.id)}>Done</button>
            <button type="button" className="btn btn-outline-secondary"
              onClick={() => props.onEdit(task.id)}>Edit</button>
          </div>
        </div>
      </li>))}
    </ul>
  )
}

export default TaskList