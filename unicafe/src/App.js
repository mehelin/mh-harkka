import React, { useState } from 'react'

const Button = ({onClick, text}) => {  
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}
 
const Tilastot = ({hyva, huono, neutraali}) => {  
  
  let keskiarvo = 0
  let positiivinen = 0
  let kaikki = hyva + huono + neutraali 

  if(kaikki === 0) {
    return (
      <div>
        Ei ole palautetta
      </div>
    )
  }

  else if(kaikki > 0) { 
      keskiarvo = (hyva - huono) / kaikki
      positiivinen = hyva / kaikki  * 100 + ' %'
  }

  return (
    <>
    {/* tässä taulukkoon*/}
    <table>
      <tbody>
        <tr><StatisticLine text='hyvä: ' value={hyva}></StatisticLine></tr>
        <tr><StatisticLine text='neutral: ' value={neutraali}></StatisticLine></tr>
        <tr><StatisticLine text='huono: ' value={huono}></StatisticLine></tr>
        <tr><StatisticLine text='kaikki: ' value={kaikki}></StatisticLine></tr>
        <tr><StatisticLine text='keskiarvo: ' value={keskiarvo}></StatisticLine></tr>
        <tr><StatisticLine text='positiivinen: ' value={positiivinen}></StatisticLine></tr>
      </tbody>
    </table>
  </>
  )
}


const App = () => {
  
  const [hyva, setHyva] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)

  const hyvaFeedback = () => setHyva(hyva + 1)
  const neutraaliFeedBack = () => setNeutraali(neutraali + 1)
  const huonoFeedBack = () => setHuono(huono + 1)

  return (
    <div>
      <h1>Anna palautetta</h1>

      <Button onClick={hyvaFeedback} text='hyvä'/>
      <Button onClick={neutraaliFeedBack} text='neutraali'/>
      <Button onClick={huonoFeedBack} text='huono'/>

    <h1>Tilastot</h1>

      <Tilastot hyva={hyva} neutraali={neutraali} huono={huono}/>
    </div>
  )
}


export default App

