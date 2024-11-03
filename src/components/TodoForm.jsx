import React, { useState } from 'react'
import Button from 'utils/Button'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
  const defaultTodo = { id: uuidv4(), text: '', isCompleted: false }
  
  const [todo, setTodo] = useState({ ...defaultTodo })

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(todo)
    setTodo({ ...defaultTodo })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        placeholder="Enter new todo"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default TodoForm
