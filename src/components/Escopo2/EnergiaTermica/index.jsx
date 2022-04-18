import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import SelectArea from '../../Select'
import styled from 'styled-components'
import { contabilizarActions } from '../../../actions'
import Routes from './Routes'
// import { useDispatch } from 'react-redux'
// import { others } from '../../../constants/redux'

function EnergiaTermica({ tables, onChangeData, items }) {
    const dispatch= useDispatch()
    const [close, setClose] = useState(true)
    
    // const dispatch = useDispatch()
    // const [option, setOption] = useState('')

    // const handleOption= e => {
    //     const event= e.target.value
    //     setOption(event)
    //     dispatch({
    //         type: others.SET_OTHER_OPTION,
    //         payload: event
    //     })
    // }
    

  return (
    <Container>
        {close &&
            <Notif>
                <BtnArea>
                    <BtnClose onClick={() => setClose(!close)}>✕</BtnClose>
                </BtnArea>
                <Li>
                    Indique o combustível, a eficiência do fervedor e o fator de Abas Gerais emissão para cada unidade, local, ou ponto na Tabela 1.   
                </Li>
                <Li>
                    Selecione o "tipo de combustível" na caixa, indique a eficiência do fervedor e a quantidade de vapor comprado.
                </Li>
                <Li>
                    Se não souber a eficiência do fervedor, use Coleção 80% como o valor padrão.
                </Li>
                <Li>
                    Se mais de um tipo de combustível for usado para uma unidade, Histórico local, ou ponto, use mais de uma linha por registro de fonte.
                </Li>
                <Li>
                    Altere na Tabela os fatores de emissão padrão de CO,, CH, e N,O pelos valores do fornecedor, se esta informação for disponível.
                </Li>
            </Notif>
        }
        <Routes onChangeData={onChangeData} items={items} tables={tables} />
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

export default EnergiaTermica