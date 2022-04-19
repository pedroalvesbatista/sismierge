import React from 'react'
import { 
    Area,
    Svg,
    Circle1,
    Circle2,
    Title
 } from './style'

function Circle({ percent, second }) {
  return (
    <Area>
        <Svg>
            <Circle1 cx="45" cy="45" r="22" fill="none" stroke="#e6e6e6" stroke-width="12"> 10 </Circle1>
            <Circle2 
                percent={20} 
                cx="45" 
                cy="45" 
                r="22" 
                fill="none" 
                // stroke="#f77a52" 
                stroke-width="12" 
                pathLength="100" 
                strokeDashoffset={`calc(100 - ${percent})`}
                second= {second}
            />
        </Svg>
        <Title> {percent}% </Title>
    </Area>
  )
}

export default Circle