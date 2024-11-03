import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(todo)
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter new todo"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
