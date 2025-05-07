import React from 'react'

export default function Die({ value, isHeld }) {
    return (
        <button style={{ backgroundColor: isHeld === true ? "#59E391" : "white" }}>
            {value}
        </button>
    )
}
