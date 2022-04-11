import React from 'react'
import styled from 'styled-components'
import { primary, second } from '../../constants/tailwind/colors'

function SelectArea({ value, onChange, item, title }) {

  return (
    <Container
        value={value} 
        onChange={onChange}
    >
        <option style={{color: primary.cinza}} > {title} </option>
        {item?.map((i, index) => (
            <Option value={i}>
                {i}
            </Option>
        ))}
    </Container>
  )
}

export const Container = styled.select`
    width: 90%;
    height: 40px;
    /* background-color: transparent; */
    border: 2px solid ${primary.verde};
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34); 
    box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34);
    padding: 0px 10px;
    outline: none;
    margin: 10px 0px;
    color: ${second.cinza+'89'};
    font-weight: 600;

    &:active{
        outline: none;
    }
    /* &:not(:checked){
        color: #000;
    } */
`
export const Option = styled.option`
    color: ${second.cinza};
`

export default SelectArea