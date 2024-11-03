import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem('todos')))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])
  

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos}/>
    </>
  )
}

export default TodoContainer
