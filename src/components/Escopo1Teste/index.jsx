import React from 'react'
import SelectArea from '../Select'
import { Area, Button, Card, ContentArea } from './styles'

function Escopo1Teste({ data }) {
  return (
    <Area>
        <ContentArea width="15%" align="flex-start" >
            <SelectArea 
                title={"Escolha o Ano Inventariodo"}
                item={[2019, 2020, 2021]}
            />
        </ContentArea>
        <ContentArea>
            {data?.map((item, index) => (
                <Card key={index}>
                    {item.title}
                </Card>
            ))}
        </ContentArea>
        <ContentArea justify="center" align="center" width="100%" >
            <Button> PRÓXIMO </Button>
        </ContentArea>
    </Area>
  )
}

export default Escopo1Teste