import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'



export default function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())

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
        if (gameWon === false) {
            setDice(oldDice => oldDice.map((die) => {
                return die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) }
            }))
        } else {
            setDice(generateAllNewDice())
        }
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


            <button className='roll-dice' onClick={rollDice}>{gameWon === true ? "New Game" : "Roll Dice"}</button>


        </main>
    )
}

