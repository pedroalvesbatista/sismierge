import React from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

function BarButton({ onSave, onSend, onPreview }) {

    
  return (
    <Area>
        <Button onClick={onSave} color='verde'>Salvar</Button>
        <Button onClick={onSend} color='roxo'>Enviar</Button>
        <Button onClick={onPreview}>Prévia de cálculos</Button>
    </Area>
  )
}

export const Area = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const Button = styled.div`
    padding: 10px 30px;
    border-radius: 6px;
    background-color: ${(props) => props.color === 'verde' ? primary.verde : props.color === 'roxo' ? primary.roxo : primary.cinza};
    color: #${(props) => props.color ? 'fff' : '000'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    /* padding-bottom: 5px; */
    font-size: 14px;
    margin: 10px 0px 0px 20px;
    box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.34);
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 1;
    }

`

export default BarButton