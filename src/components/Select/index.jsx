import React from 'react'
import styled from 'styled-components'
import { admin, primary, second } from '../../constants/tailwind/colors'

function SelectArea({ value, onChange, item, title, modal=true, width, placeholder, spaceLeft, spanceTop }) {

  return (
    <Area spanceTop={spanceTop} spaceLeft={spaceLeft} width={width}>
        <Label>{title}</Label>
        <Container
            value={value} 
            onChange={onChange}
            modal= {modal}
        >
            <option style={{color: primary.cinza}} > {placeholder} </option>
            {item?.map((i, index) => (
                <Option value={i}>
                    {i}
                </Option>
            ))}
        </Container>
    </Area>
  )
}

const Area = styled.div`
    width: ${({width}) => width ?? "none"};
    margin-top: ${({spanceTop}) => spanceTop ? spanceTop : "10px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${({spaceLeft}) => spaceLeft ? "20px" : "0px"};
`
const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${admin.dark};
`

export const Container = styled.select`
    width: ${({modal}) => modal ? "100%" : "none"};
    height: 40px;
    /* background-color: transparent; */
    border: 2px solid ${({modal}) => modal ? admin.cinza : `${primary.verde}`};
    border-radius: ${({modal}) => modal ? "5" : "10"}px;
    box-shadow: ${({modal}) => modal ? "none" : "5px 5px 20px -3px rgba(0,0,0,0.34)"};
    padding: 0px 10px;
    outline: none;
    margin: ${({modal}) => modal ? "5px 0px" : "10px 0px"};
    color: ${second.cinza+'99'};
    font-weight: ${({modal}) => modal ? "400" : "600"};
    font-size: ${({modal}) => modal ? "14px" : "none"};

    &:active{
        outline: none;
    }
    &:valid{
        color: #000;
    }
    &:invalid{
        color: ${second.cinza};
    }
    /* &:not(:checked){
        color: #000;
    } */
`
export const Option = styled.option`
    color: ${second.cinza};
`

export default SelectArea