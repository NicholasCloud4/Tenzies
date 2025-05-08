import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'



export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

    /**
     * Challenge:
     * Log "Game won!" to the console only if the 2 winning
     * conditions are met.
     * 
     * 1. all the dice are being held, and
     * 2. all the dice have the same value
     * 
     * For now, no need to even save a variable!
     */

    /**
     * Challenge part 2:
     * 1. Create a new `gameWon` variable.
     * 2. If `gameWon` is true, change the button text to
     *    "New Game" instead of "Roll"
     */

    let gameWon = dice.every(die => die.isHeld === true) && dice.every(die => die.value === dice[0].value)



    function generateAllNewDice() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            arr.push({ value: randomNumber, isHeld: false, id: nanoid() })
        }
        return arr
    }


    function hold(id) {
        setDice(oldDice => oldDice.map((die) => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))

        console.log(id)
    }


    function rollDice() {
        //setDice(generateAllNewDice())
        setDice(oldDice => oldDice.map((die) => {
            return die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) }
        }))
    }


    let diceElements = dice.map((die) => {
        return <Die hold={hold} key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} />
    })

    return (
        <main>
            {gameWon === true && <Confetti />}

            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>


            <div className='dice-container'>
                {diceElements}
            </div>

            {gameWon === true ? <button className='roll-dice' onClick={rollDice}>New Game</button> :
                <button className='roll-dice' onClick={rollDice}>Roll Dice</button>}

        </main>
    )
}

