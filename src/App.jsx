import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'



export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

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

    /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `hold`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */

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

            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>


            <div className='dice-container'>
                {diceElements}
            </div>

            <button className='roll-dice' onClick={rollDice}>Roll Dice</button>

        </main>
    )
}

