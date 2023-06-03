import { useState } from 'react'
import './App.css'
import CreateTaskForm from './CreateTaskForm'
import EditTaskForm from './EditTaskForm'
import TaskList from './TaskList'


export default function App() {
  //state for id task status visibility
  const [editTaskId, setEditTaskId] = useState(null)

  const onEdit = (id) => {
    setEditTaskId(id)
  }
  const onEditCancel = () => {
    setEditTaskId(null)
  }

  return (
    <main className='container'>
      <CreateTaskForm />
      <TaskList onEdit={onEdit} />
      <EditTaskForm id={editTaskId} onCancel={onEditCancel} />
    </main>
  )
}
