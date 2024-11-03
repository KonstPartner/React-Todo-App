import React from 'react'
import { RiTodoFill } from "react-icons/ri";
import styles from './Todo.module.css'

const Todo = ({todo}) => {
  return (
    <div className={styles.todoContainer}>
    <RiTodoFill className={styles.todoIcon}/>
    <p>{todo}</p>
    </div>
  )
}

export default Todo