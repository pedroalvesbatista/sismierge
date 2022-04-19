import React from 'react'
import Chart from '../Chart'
import Circle from './Circle'
import { 
    Area,
    Card,
    Text,
    TextArea
 } from './styles'

function Board({ percent }) {
  return (
    <Area>
      <Card>
        <Circle percent={34} />
        <TextArea>
          <Text bold={true}> 2.943,518 </Text>
          <Text color={true} size={true}> Emissões totais em CO2 equivalente (toneladas métricas) </Text>
        </TextArea>
      </Card>
      
      <Card>
        <Circle percent={56} second={true} />
        <TextArea>
          <Text bold={true}> 2.943,518 </Text>
          <Text color={true} size={true}> Emissões totais em CO2 biogênico (toneladas métricas) </Text>
        </TextArea>
      </Card>
    </Area>
  )
}

export default Board