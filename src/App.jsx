import React, { useState } from 'react'
import Die from './components/Die'

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */


export default function App() {

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

    return (
        <main>
            <div className='dice-container'>
                {diceElements}
            </div>

        </main>
    )
}

