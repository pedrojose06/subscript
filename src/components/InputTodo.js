import React, { useRef } from 'react'

const InputTodo = (props) => {
  const titleRef = useRef()

  const verifyMandatoryFields = (title) => {
    if (!title) {
      alert('Title is mandatory')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = titleRef.current.value
    verifyMandatoryFields(title) && props.addTodoProps(title)
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
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}
export default InputTodo
