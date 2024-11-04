import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer = ({ saveKey }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem(saveKey)))
  }, [saveKey])

  useEffect(() => {
    localStorage.setItem(saveKey, JSON.stringify(todos))
  }, [todos, saveKey])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        deleteCompletedTodos={deleteCompletedTodos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        clearTodos={() => setTodos([])}
        todos={todos}
      />
    </>
  )
}

export default TodoContainer
