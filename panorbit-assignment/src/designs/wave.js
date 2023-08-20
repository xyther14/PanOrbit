import React from 'react'
import './wave.css'
const Wave = () => {
    return (
        <div className="svg-container">
        <svg viewBox="0 0 500 200">
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(80)">
                    <stop offset="5%" stop-color="blue" />
                    <stop offset="95%" stop-color="#702CC8" />
                </linearGradient>
            </defs>
            <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="url(#myGradient)"></path>
            <path d="M 0 107 C 161 204 360 0 511 115 L 510 0 L 0 0" fill='#E1D2F3' opacity='0.5'></path>
        </svg>
        </div>
    )
}

export default Wave