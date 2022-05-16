import styled from 'styled-components'
import { BiBuildingHouse } from "react-icons/bi"
import { primary } from '../../constants/tailwind/colors'

export const Container = styled.div`
    /* width: 190px;
    height: 190px; */
    /* padding: 10px; */
    border-radius: 10px;
    box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3);
    /* background-color: blueviolet; */
`

export const Area = styled.div`
    // width: 180px;
    // height: 180px;
    width: 220px;
    height: 220px;
    display: flex;
    background-image: ${({bgColor}) => `radial-gradient(circle at top right, ${bgColor ?? "#f073a6, #D4437E"} 50% )`};
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.08);
    /* box-shadow: inset 0px 0px 32px -7px rgba(0,0,0,0.13); */
    padding: 30px;
    justify-content: space-between;
    /* align-items: center; */
    cursor: pointer;

    &:hover{
        opacity: 0.93;
    }
    &:active{
        opacity: 1;
    }
`
export const Icon = styled(BiBuildingHouse)`
    color: ${({color}) => color ?? "#D4437E"};
    padding: 10px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    
`
export const Text = styled.div`
    color: ${({color}) => color ?? "#fff"};
    font-size: ${({size}) => size ?? '0.8em'};
    font-weight: ${({bold}) => bold ?? "600"};
    line-height: 1
    /* text-align: start; */
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
`

