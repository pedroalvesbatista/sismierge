import React, { useState } from 'react'
import SelectArea from '../../Select'
import styled from 'styled-components'
import { escopo } from '../../../constants/app'
import { primary } from '../../../constants/tailwind/colors'
import Table from '../../Table'

function ElecLocalisation({ items, tables }) {
    const [close, setClose] = useState(true)

    console.log(items);

  return (
    <Container>
        {close &&
            <Notif>
                <BtnArea>
                    <BtnClose onClick={() => setClose(!close)}>✕</BtnClose>
                </BtnArea>
                <Li>
                    Consideramos qualquer sistema isolado aquele que interligue gerador e consumidor sem passar pelo Sistema Integrado Nacional (SIN) ou ao Sistema Isolado do Amazonas.    
                </Li>
                <Li>
                    Relate aqui as emissões relacionadas à compra de energia elétrica distribuída por linhas de transmissão que não estão integradas ao Sistema Integrado Nacional (SIN) ou ao Sistema Isolado do Amazonas.
                </Li>
            </Notif>
        }
        <SelectArea 
            item={items.options}
            title= 'Informe como você quer relatar'
        />
        <SelectArea 
            title={`Escolha qual sistema elétrico deseja utilizar como entrada`}
            item={items.otherOptions}
        />
        <Table 
            titles={tables}
        />
    </Container>
  )
}

export const Container = styled.div`
    /* width: 90%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Notif = styled.ul`
    margin: 10px 0px;
    padding: 10px;
    background-color: #fae47a;
    border-radius: 10px;
    /* width: 90%; */
`
export const Li = styled.li`
    padding: 10px;
    font-weight: 600;
`
export const BtnArea = styled.div`
    width: 100%;
    /* padding: 10px 0px; */
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`
export const BtnClose = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4cece;
    font-size: 10px;
    font-weight: bold;
    box-shadow: 0px 0px 5px #090909a6;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 1;
    }
`

export default ElecLocalisation