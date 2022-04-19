import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { data, header } from '../../constants/app/preview'
import { dadosEmissaoPorCombustivel } from '../../functions/tabelaConversao'

import { 
    TableArea,
    Tbody,
    Thead,
    Td,
    Th,
    Tr,
    MoreTable,
    Container,
    AreaBtn,
    TitleArea,
    Input
  } from './stylesPreview'

function PreviewTable({ onClick, preview, items }) {
    const [close, setClose] = useState(preview)
    const [newData, setNewData] = useState(data)

    const combustivel= dadosEmissaoPorCombustivel.tipoCombustivel.combustivelFossil

    const gwpCO2 = 1; 
    const gwpCH4 = 28;
    const gwpN2O = 265;
    
    useEffect(() => {
      if (data && items) {
        // const ex = data.filter(i => i.Tipo === 'Alcatrão')
        // console.log(ex);

        const combustivelTotal= items[5]?.valor?.reduce((a, b) => a + b)
        const emissaoCO2= (parseFloat(combustivelTotal) * combustivel[0].fator_emissao_co2) /1000
        const emissaoCH4= (parseFloat(combustivelTotal) * parseFloat(combustivel[0].fator_emissao_ch4)) /1000
        const emissaoN2O= (parseFloat(combustivelTotal) * parseFloat(combustivel[0].fator_emissao_n2o)) /1000
        const emissoesCO2e= (parseFloat(emissaoCO2) * gwpCO2) + (emissaoCH4 * gwpCH4) + (emissaoN2O * gwpN2O)

        setNewData([...newData, 
            newData[0].consumo_energético_por_combustível= combustivelTotal?.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
            newData[0].CO2= emissaoCO2?.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
            newData[0].CH4= emissaoCH4?.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
            newData[0].N2O= emissaoN2O?.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
            newData[0].CO2e= emissoesCO2e?.toLocaleString('pt-BR', {minimumFractionDigits: 2}),
            
        ].slice(0, 54))

        // console.log(items);
          
      }
    }, [items, newData])
    

  return (
    <>
        {close && 
            <Container>
                <BtnArea>
                    <BtnClose onClick={onClick}>✕</BtnClose>
                </BtnArea>
            <TitleArea> Tabela 2. Dados de emissões por combustível utilizado </TitleArea>
            <div style={{display: 'flex'}}>
                <TableArea>
                    <Thead>
                        <Tr>
                            {header?.map((item, key) => (
                                <Th key={key}>{item}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {newData.map((item, index) => (
                            <Tr key={index}>
                                <Td> {item?.Tipo} </Td>
                                <Td> {item?.consumo_energético_por_combustível} </Td>
                                <Td> {item?.CO2} </Td>
                                <Td> {item?.CH4} </Td>
                                <Td> {item?.N2O} </Td>
                                <Td> {item?.CO2e} </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </TableArea>
            </div>
        </Container>
        }
    </>
  )
}

// export const Container = styled.div`
//     /* width: 90%; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `
export const Notif = styled.ul`
    margin: 10px 0px;
    padding: 10px;
    background-color: #fff;
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

export default PreviewTable