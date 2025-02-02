import React, { useRef } from 'react'
import boards from '../constants/boards'

const InputTodo = (props) => {
  const titleRef = useRef()
  const boardRef = useRef()

  const verifyMandatoryFields = (task) => {
    if (!task.title && !task.board) {
      alert('Title is mandatory')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      title: titleRef.current.value,
      board: boardRef.current.value,
    }
    verifyMandatoryFields(task) && props.addTodoProps(task)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        name="title"
        ref={titleRef}
      />
      <select className="select-board" ref={boardRef}>
        {boards.map((board) => (
          <option key={board} value={board}>
            {board}
          </option>
        ))}
      </select>
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}
export default InputTodo
