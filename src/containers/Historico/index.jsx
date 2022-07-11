import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { 
  Area, Container, HeaderArea, HeaderTitle
} from './styles'

import { othersActions } from '../../actions'


export const Historico = () => {
  const dispatch = useDispatch()
  const headerTitle= ["Nome", "Função", "Ação", "Data", "Hora"]
  const data= [
    {name: "Flory Muenge", funcao: "Analista", action: "Criou inventariação", date: "11/07/2022", hora: "11:53"},
    {name: "Flory Muenge", funcao: "Analista", action: "Iniciou inventariação", date: "11/07/2022", hora: "12:30"},
    {name: "Flory Muenge", funcao: "Analista", action: "Iniciou Escopo 1", date: "11/07/2022", hora: "12:35"},
    {name: "Flory Muenge", funcao: "Analista", action: "Iniciou combustão móvel", date: "11/07/2022", hora: "12:36"},
    {name: "Flory Muenge", funcao: "Analista", action: "Concluiu combustão móvel", date: "11/07/2022", hora: "12:50"},
    {name: "Flory Muenge", funcao: "Analista", action: "Concluiu Escopo 1", date: "11/07/2022", hora: "12:53"},
    {name: "Flory Muenge", funcao: "Analista", action: "Concluiu inventariação", date: "11/07/2022", hora: "13:00"},
  ]
  

  return (
    <Area>
      <HeaderArea header>
        {headerTitle.map((title, index) => (
          <HeaderTitle key={index}> {title} </HeaderTitle>
        ))}
      </HeaderArea>
      <HeaderArea>
      {data.map((item, index) => (
          <Container key={index}>
            <HeaderTitle weight={400} color> {item.name} </HeaderTitle>
            <HeaderTitle weight={400} color> {item.funcao} </HeaderTitle>
            <HeaderTitle weight={400} color> {item.action} </HeaderTitle>
            <HeaderTitle weight={400} color> {item.date} </HeaderTitle>
            <HeaderTitle weight={400} color> {item.hora} </HeaderTitle>
          </Container>
      ))}
      </HeaderArea>
    </Area>
  )
}