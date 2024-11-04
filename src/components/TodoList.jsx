import React from 'react'
import Todo from './Todo'
import TodoActions from './TodoActions'

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
      <TodoActions
        todos={todos}
        clearTodos={clearTodos}
        deleteCompletedTodos={deleteCompletedTodos}
      />
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
      {!!completedCount && (
        <h2>
          You have completed {completedCount}{' '}
          {completedCount > 1 ? 'todos' : 'todo'}
        </h2>
      )}
    </>
  )
}

export default TodoList
