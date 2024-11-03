import React from 'react'
import { RiTodoFill, RiCheckFill, RiDeleteBin2Line } from 'react-icons/ri'
import styles from './Todo.module.css'

const Todo = ({ todo, deleteTodo, toggleCompleted }) => {
  return (
    <div
      className={`${styles.todoContainer} ${
        todo.isCompleted ? styles.completed : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <p>{todo.text}</p>
      <div className={styles.todoClickableIconsContainer}>
        <RiDeleteBin2Line
          className={`${styles.todoClickableIcons} ${styles.deleteIcon}`}
          onClick={() => deleteTodo(todo.id)}
        />
        <RiCheckFill
          className={`${styles.todoClickableIcons} ${styles.checkIcon}`}
          onClick={() => toggleCompleted(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo
