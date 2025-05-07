import React, { useState } from 'react'
import Die from './components/Die'



export default function App() {
    /**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            arr.push({ value: randomNumber, isHeld: true })
        }
        return arr
    }


    let diceElements = dice.map((die, index) => {
        return <Die key={index} value={die.value} isHeld={die.isHeld} />
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

