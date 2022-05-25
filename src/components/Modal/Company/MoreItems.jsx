import React, { useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../../constants/tailwind/colors'

function MoreItems({ item, onClickMore, onClickLess }) {
    const [list, setList] = useState(item)


  return (
    <div>
        <AreaBtn>
            {item.length > 1 && <MoreTable delete={true} onClick={onClickLess}> - </MoreTable>}
            <MoreTable onClick={onClickMore}> + </MoreTable>
        </AreaBtn>
    </div>
  )
}

const AreaBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MoreTable = styled.div`
    width: 40px;
    height: 35px;
    border-radius: 10px;
    background-color: ${(props) => props.delete ? primary.cinza : primary.roxo};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 5px;
    font-size: 20px;
    margin: 10px 0px 0px 20px;
    box-shadow: 3px 3px 10px -3px rgba(0,0,0,0.34);
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 1;
    }

`

export default MoreItems