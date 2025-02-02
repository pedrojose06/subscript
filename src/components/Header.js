import React from 'react'

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '2em',
  }
  return (
    <header style={headerStyle}>
      <img
        src="https://cdn.prod.website-files.com/6509452bb9a08a874247e550/668f6a8bc9ebf0842473d0ba_logo%20(white-back).svg"
        width="135"
        alt=""
        className="image-6"
      />
      <h1 style={{ fontSize: '25px', marginBottom: '15px' }}>
        Simple Todo App
      </h1>
      <p style={{ fontSize: '19px' }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}

export default Header
