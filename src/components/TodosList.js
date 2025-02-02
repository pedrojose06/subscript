import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </div>
  )
}

export default TodosList
