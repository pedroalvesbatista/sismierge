import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Chart from '../Chart'
import Circle from './Circle'
import { 
    Area,
    Card,
    Text,
    TextArea
 } from './styles'

function Board({ co2, co2t }) {
  
  

  return (
    <Area>
      <Card>
        <Circle percent={!co2 ? 0 : co2?.percent} />
        <TextArea>
          <Text bold={true}> {co2?.value.toLocaleString('pt-BR', {minimumFractionDigits: 1})} </Text>
          <Text color={true} size={true}> Emissões totais em CO2 equivalente (toneladas métricas) </Text>
        </TextArea>
      </Card>
      
      <Card>
        <Circle percent={!co2t ? 0 : co2t?.percent} second={true} />
        <TextArea>
          <Text bold={true}> {co2t?.value.toLocaleString('pt-BR', {minimumFractionDigits: 1})} </Text>
          <Text color={true} size={true}> Emissões totais em CO2 biogênico (toneladas métricas) </Text>
        </TextArea>
      </Card>
    </Area>
  )
}

export default Board