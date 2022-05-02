import React from 'react'
import styled, { keyframes } from 'styled-components'


function DropDown({children}) {
  return (
    <Area>
        {children}
    </Area>
  )
}

const Area = styled.div`
    position: absolute;
    width: 200px;
    /* height: 100px; */
    background-color: #fff;
    padding: 10px;
    top: 100%;
    border-radius: 5px;
    margin-top: 10px;
    box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.05);
    transition: all .1s linear;
`

const animationDrop = keyframes`

`

export default DropDown