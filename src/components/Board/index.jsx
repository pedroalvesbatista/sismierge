import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    // <Container>
    //   <Area>
    //     <Icon />
    //     <Text size="3vh">
    //       {number}
    //     </Text>
    //     <Text bold="400">
    //       {title}
    //     </Text>
    //   </Area>
    // </Container>
    <Container>
      <Area>
        {/* <Icon /> */}
        <Text size="3vh">
          {/* {number} */}
          {title}
        </Text>
        <Text bold="400">
        <a  href="#" title="Clique para Baixar todas as NF"><i>Baixar todas as NF</i></a>
        </Text>
        <Text bold="400">
        <a  href="#" title="Dados rastreáveis"><i>Dados rastreáveis</i></a>
        </Text>
        <Text bold="400">
        <a  href="#" title="Clique para Baixar todas as NF"><i>Fatores de Emissão</i></a>
        </Text>
        <button type="button" class="btn btn-secondary btn-sm" title="Salvar e Enviar"><i>Salvar e Enviar</i></button>
      </Area>
    </Container>
  )
}

export default Board