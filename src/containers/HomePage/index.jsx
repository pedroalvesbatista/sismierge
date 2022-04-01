import React from 'react'
import { useNavigate } from 'react-router-dom'
import { inicial } from '../../constants/app/'
import { 
  Area, 
  TextArea ,
  ContentArea,
  Card 
} from './styles'

export const HomePage = () => {
  const navigate= useNavigate()
  
  return (
    <Area >
      <TextArea>
        O que você deseja fazer hoje?
      </TextArea>
      <ContentArea>
        {inicial.map((e, key) =>(
          <Card onClick={() => navigate(e.slug)} key={key}>
            {e.text}
          </Card>
        ))}
      </ContentArea>
    </Area>
  )
}
