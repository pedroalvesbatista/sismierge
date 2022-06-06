import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { admin, second } from '../../constants/tailwind/colors'

function InputChoose({ label, items, spanceLeft, spanceRight, onClick }) {
    const [data, setData] = useState(items)

    const handleDelete = (e, item) => {
        e.stopPropagation()
        setData(data?.filter(i => i !== item))
    }
    

  return (
    <Area onClick={onClick} spanceLeft={spanceLeft} spanceRight={spanceRight}>
        <Label> {label} </Label>
        <AreaInput isItem={items} onClick={onClick}>
            <Placeholder>Clique aqui para escolher</Placeholder> 
            {data?.map((item, index) => (
                <AreaSelected onClick={(e) => handleDelete(e, item)} key={index}>
                    <Text>{item}
                        <IconClose />
                    </Text>
                </AreaSelected>
            ))}
        </AreaInput>
    </Area>
  )
}

const Area= styled.div`
    width: 290px;
    height: 100%;
    /* flex: 1; */
    margin: 8px 0px;
    display: flex;
    flex-direction: column;
    margin-left: ${({spanceLeft}) => spanceLeft ? '20px' : 'none'};
    margin-right: ${({spanceRight}) => spanceRight ? '20px' : 'none'};
    
`
const AreaInput= styled.div`
    width: 100%;
    border: 2px solid ${admin.cinza};
    border-radius: 5px;
    height: 100%;
    
    padding: ${({isItem}) => isItem ? "8px 6px" : "8px 6px"};
    display: flex;
    flex-wrap: wrap;
    /* overflow-x: auto;
    overflow-y: hidden; */

    &::-webkit-scrollbar{
        /* width: 10px; */
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: ${admin.dark}79;
    border-radius: 20px;
}
`
export const AreaSelected= styled.div`
    /* padding: 2px; */
    display: flex;
    align-items: center;
    /* font-size: 14px; */
    flex-wrap: nowrap;
    margin-right: 5px;
    margin-bottom: 5px;
    flex: none;  
`
const Placeholder = styled.span`
    font-size: 12px;
    color: #767272;
`
export const Text= styled.div`
    padding: 2px;
    background-color: ${admin.verde}28;
    display: flex;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
    font-weight: 500;
    flex-wrap: nowrap;
    
`
const IconClose= styled(IoMdClose)`
    color: ${admin.verde};
    margin-left: 5px;
    font-size: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 1;
    }
`

const Label= styled.span`
    /* margin-bottom: 6px; */
    font-weight: 600;
    color: ${admin.dark};
    display: flex;
    padding: 5px;
    font-size: ${({size}) => size ?? "14"}px;
`

export default InputChoose