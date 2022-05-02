import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Chart from '../Chart'
import Circle from './Circle'
import { 
    Area,
    Container,
    Icon,
    Text,
    TextArea
 } from './styles'

function Board({ title = "Custo total do uso", number= "R$ 12 032" }) {
  
  

  return (
    <Container>
      <Area>
        <Icon />
        <Text size="3vh">
          {number}
        </Text>
        <Text bold="400">
          {title}
        </Text>
      </Area>
    </Container>
  )
}

export default Board