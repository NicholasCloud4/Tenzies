import React from 'react'
import Die from './components/Die'

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */


export default function App() {

  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6 + 1)
      arr.push(randomNumber)
    }
    return arr

  }

  console.log(generateAllNewDice())
  return (
    <main>
      <div className='dice-container'>
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
      </div>

    </main>
  )
}

