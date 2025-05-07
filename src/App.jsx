import React, { useState } from 'react'
import Die from './components/Die'



export default function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            arr.push({ value: randomNumber, isHeld: false })
        }
        return arr
    }


    let diceElements = dice.map((die, index) => {
        return <Die key={index} value={die.value} />
    })

    function rollDice() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className='dice-container'>
                {diceElements}
            </div>

            {/*New button here*/}
            <button className='roll-dice' onClick={rollDice}>Roll Dice</button>

        </main>
    )
}

