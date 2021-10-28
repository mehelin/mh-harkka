import React, { useState } from 'react'

// harjoitus anekdootit 1.12
const Button = ({handleClick, text}) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
)

// anekdootit
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // harjoitus 1.13 kopiointi
  const [ääntä, setVotes] = useState(anecdotes.map(() => 0))
  
  const Voting = () => {
    const copy = [...ääntä]
    copy[selected] +=1
    return setVotes(copy)
  }

  // harjoitus 1.14 näyttää eniten ääniä saaneen anekdootin
  const BestAnecdote = ääntä.indexOf(Math.max(...ääntä))
  

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      {anecdotes[selected]}
      <p>on {ääntä[selected]} ääntä</p>
      <Button handleClick={Voting} text='äänestä'/>
      <Button handleClick={getRandomAnecdote} text='seuraava anegdootti'/>
      <h2>Anekdootti jolla on eniten ääniä</h2>
      {/* ex 1.14 */}
      <p>{anecdotes[BestAnecdote]} anekdootilla on {ääntä[BestAnecdote]} ääntä</p>
    </div>
  )
}

export default App