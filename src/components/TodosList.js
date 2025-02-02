import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        ))
      ) : (
        <h4>This list is empty</h4>
      )}
    </div>
  )
}

export default TodosList
