import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { primary, second } from '../../constants/tailwind/colors'
import { others } from '../../constants/redux'

function SelectArea({  valueOption, item, title }) {
    const dispatch = useDispatch()

    const handleOption= e => {
        const event= e.target.value
        // console.log(event);
        dispatch({
            type: others.SET_OPTION,
            payload: event
        })
    }

    

  return (
    <Container
        // value={optionSelect} 
        onChange={handleOption}
    >
        <option style={{color: primary.cinza}} > {title} </option>
        {item?.map((i, index) => (
            <Option value={valueOption}>
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