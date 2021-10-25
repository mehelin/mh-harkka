import React from 'react'

const App = () => {
  const course = {
    //id: 1,
    name: 'Half Stack application development',
    parts: [
  
    {
      name: 'Fundamentals of React',
      exercises: 10,
      //id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      //id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      //id: 3
    }
  ]
}

  const {id, name, parts} = course
  console.log('id', id)
  console.log('name', name)
   
  const total = parts.map(item => item.exercises).reduce((osa, arvo) => osa + arvo, 0)
  


  return (
    <div>
      <h1>{name}</h1>
      <p>{parts.map(i => <p>{i.id} {i.name} {i.exercises} </p>)}</p> 
      <p> Total: {parts.map(item => item.exercises).reduce((osa, arvo) => osa + arvo, 0)} </p> 
    </div>
  )
}

export default App
