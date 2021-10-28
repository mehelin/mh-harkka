import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
}

  const {name, parts} = course
  
  return (
    <div>
      <h1>{name}</h1>
      <p>{parts.map(i => <p>{i.name} {i.exercises} </p>)}</p> 
      <p> Total: {parts.map(item => item.exercises).reduce((osa, arvo) => osa + arvo, 0)} </p> 
    </div>
  )
}

export default App

