import React from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'

function Tab1() {
    const titles= ["nome do usuário", "Email", "Tipo", "Confirmado", "Status"]
  return (
    <Area>
        <BarTable header={titles} />
    </Area>
  )
}

const Area = styled.div`
    margin-top: 104px;
    width: 100%;
    /* height: 200px; */
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    padding: 0px 30px;
`

export default Tab1