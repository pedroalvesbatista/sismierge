import React from 'react'
import { inicial } from '../../constants/app/'
import { 
  Area, 
  TextArea ,
  ContentArea,
  Card 
} from './styles'

export const HomePage = () => {
  return (
    <Area >
      <TextArea>
        O que você deseja fazer hoje?
      </TextArea>
      <ContentArea>
        {inicial.map((e, key) =>(
          <Card key={key}>
            {e}
          </Card>
        ))}
      </ContentArea>
    </Area>
  )
}
