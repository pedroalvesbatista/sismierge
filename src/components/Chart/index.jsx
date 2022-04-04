import React from 'react'
import { 
    Area,
    Svg,
    Circle1,
    Circle2,
    Title
 } from './styles'

function Chart({ percent }) {
  return (
    <Area>
        <Svg>
            <Circle1 cx="75" cy="75" r="65" fill="none" stroke="#e6e6e6" stroke-width="12"> 10 </Circle1>
            <Circle2 
                percent={20} 
                cx="75" 
                cy="75" 
                r="65" 
                fill="none" 
                // stroke="#f77a52" 
                stroke-width="12" 
                pathLength="100" 
                strokeDashoffset={`calc(100 - ${percent})`}
            />
        </Svg>
        <Title> {percent}% </Title>
    </Area>
  )
}

export default Chart