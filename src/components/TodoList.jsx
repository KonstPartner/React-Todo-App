import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Todo from './Todo'
import Button from 'utils/Button'
import styles from './TodoList.module.css'

const TodoList = ({ todos, clearTodos }) => {
  if (!todos.length) {
    return <h2>Todo list is empty</h2>
  }

  return (
    <>
      <div className={styles.iconsContainer}>
        <Button title='Reset todos' onClick={clearTodos}>
          <RiRefreshLine/>
        </Button>
        <Button title='Delete completed todos'>
          <RiDeleteBin2Line />
        </Button>
      </div>

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo.text} />
      ))}
    </>
  )
}

export default TodoList
