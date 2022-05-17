import React from 'react'
import styled from 'styled-components'
import { admin, second } from '../../constants/tailwind/colors'


function Toogle({ active=true, onClick }) {
  return (
    <Area onClick={onClick} active={!active}>
       <Alternado onClick={onClick} active={!active}>

       </Alternado>
    </Area>
  )
}

const Area = styled.div`
    width: 60px;
    height: 30px;
    background-color: ${({active}) => active ? admin.roxo+38 : admin.cinza+38};
    padding: 2px;
    border-radius: 20px;
    
    display: flex;
    justify-content: ${({active}) => active ? "flex-end" : "flex-start"};
`
const Alternado = styled.div`
    width: 30px;
    height: 100%;
    border-radius: 20px;
    background-color: ${({active}) => active ? admin.roxo : admin.cinza};
    transition: all 0.2s cubic-bezier(.95,.15,.5,1.25);
`

export default Toogle