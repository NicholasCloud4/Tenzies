import React, { useState } from 'react'
import Die from './components/Die'



export default function App() {
    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 6 + 1)
            arr.push(randomNumber)
        }
        return arr
    }


    let diceElements = dice.map((die, index) => {
        return <Die key={index} value={die} />
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

