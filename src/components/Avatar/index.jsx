import React from 'react'
import styled from 'styled-components'

import { admin } from '../../constants/tailwind/colors'

function Avatar({
    name= "Unidade leste", 
    radius=false,
    onClick,
    bgColor
}) {
    const nameComplete= name?.split(" ")
    const firstName= nameComplete[0]
    const lastName= nameComplete?.length > 1 ? nameComplete[1] : "" 
    const firstLetter= firstName?.split("")[0]?.toUpperCase()
    const firstLetterSecondName= lastName?.split("")[0]?.toUpperCase()
    const isTwoName= nameComplete?.length > 1 
  return (
    <Area bgColor={bgColor} onClick={onClick} isTwo={isTwoName} radius={radius.toString()}>
        {isTwoName ? `${firstLetter}${firstLetterSecondName}`
            : firstLetter ?? "S"
        }
    </Area>
  )
}

const Area = styled.div`
    width: 40px;
    height: 40px;
    /* background-color: rgba(52, 155, 131, 0.4); */
    background-color: ${({bgColor}) => bgColor ? admin.verde+38 : "#fff"};
    text-align: center;
    font-size: ${({isTwo}) => isTwo ? 25 : 28}px;
    font-weight: 600;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({bgColor}) => bgColor ? admin.verde : admin.dark};
    transition: all .1s ease-out;
    box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.05);
    /* color: ${admin.verde}; */
    cursor: pointer;
    border-radius: ${({radius}) => radius ? "50%" : "5px"};
    border-bottom: 1px solid #c3c7c9;

    &:hover{
        background-color: rgba(255, 255, 255, 0.744);
        /* border-bottom: 2px solid #c3c7c9; */
    }
    &:active{
        background-color: rgba(255, 255, 255, 0.9);
        border-bottom: 1px solid #c3c7c9;
        transition: all .1s ease-out;
    }
`

export default Avatar