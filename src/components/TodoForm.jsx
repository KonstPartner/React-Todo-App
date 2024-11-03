import React, { useState } from 'react'
import Button from 'utils/Button'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ id: uuidv4(), text: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(todo)
    setTodo({ id: uuidv4(), text: '' })
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
