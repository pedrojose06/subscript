import React from 'react'

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  const { completed, id, title } = props.todo

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button type="button" onClick={() => props.deleteTodoProps(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  )
}

export default TodoItem
