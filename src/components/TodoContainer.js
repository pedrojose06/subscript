import React, { useEffect, useState } from 'react'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
// import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid'
import boards from '../constants/boards'

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

  const addTodoItem = (task) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: task.title,
      board: task.board,
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
      <div className="boards">
        {state.todos.length > 0 ? (
          boards.map((board) => (
            <div key={board}>
              <h3>{board}</h3>
              <TodosList
                todos={state.todos.filter((todo) => todo.board === board)}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
              />
            </div>
          ))
        ) : (
          <>
            <h4>All boards are empty</h4>
            <p>Add a new todo to get started</p>
          </>
        )}
      </div>
    </div>
  )
}
export default TodoContainer
