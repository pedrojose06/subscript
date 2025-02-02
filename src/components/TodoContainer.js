import React, { useEffect, useState } from 'react'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
// import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid'

const TodoContainer = () => {
  const [state, setState] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) return { todos: JSON.parse(savedTodos) }
    return { todos: [] }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  const handleChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  const delTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => {
          return todo.id !== id
        }),
      ],
    })
  }

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setState({
      todos: [...state.todos, newTodo],
    })
  }

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={state.todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  )
}
export default TodoContainer
