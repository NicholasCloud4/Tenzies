import React from 'react'

export default function Die({ value, isHeld, hold, id }) {
    return (
        <button onClick={() => hold(id)} style={{ backgroundColor: isHeld === true ? "#59E391" : "white" }}>
            {value}
        </button>
    )
}
