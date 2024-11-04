import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from 'utils/Button'
import styles from './TodoActions.module.css'

const TodoActions = ({ todos, clearTodos, deleteCompletedTodos }) => {
  return (
    <div className={styles.iconsContainer}>
      <Button title="Reset todos" onClick={clearTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete completed todos"
        onClick={deleteCompletedTodos}
        disabled={todos.find((todo) => todo.isCompleted) ? false : true}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions
