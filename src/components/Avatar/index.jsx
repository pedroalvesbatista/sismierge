import React from 'react'
import styled from 'styled-components'
import { admin } from '../../constants/tailwind/colors'

function Avatar({name, radius=false}) {
    const FirstLetter= name?.split("")[0].toUpperCase()
  return (
    <Area radius={radius}>
        {FirstLetter ?? "S"}
    </Area>
  )
}

const Area = styled.div`
    width: 40px;
    height: 30px;
    /* background-color: rgba(52, 155, 131, 0.4); */
    background-color: #fff;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${admin.dark};
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