import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Todo from './Todo'
import Button from 'utils/Button'
import styles from './TodoList.module.css'

const TodoList = ({
  todos,
  clearTodos,
  deleteTodo,
  toggleCompleted,
  deleteCompletedTodos,
}) => {
  if (!todos.length) {
    return <h2>Todo list is empty</h2>
  }

  let completedCount = 0

  return (
    <>
      <div className={styles.iconsContainer}>
        <Button title="Reset todos" onClick={clearTodos}>
          <RiRefreshLine />
        </Button>
        <Button title="Delete completed todos" onClick={deleteCompletedTodos}>
          <RiDeleteBin2Line />
        </Button>
      </div>
      {todos.map((todo) => {
        if (todo.isCompleted) {
          completedCount += 1
        }
        return (
          <Todo
            key={todo.id}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        )
      })}
      {!!completedCount && <h2>You have completed {completedCount} {completedCount > 1 ? 'todos' : 'todo'}</h2>}
    </>
  )
}

export default TodoList
