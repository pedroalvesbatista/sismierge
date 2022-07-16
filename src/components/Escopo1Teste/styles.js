import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* background-color: aliceblue; */
    /* padding: 50px; */
`
export const TextArea = styled.div`
    font-size: 30px;
`
export const ContentArea = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify ? justify : "none"};
    align-items: ${({align}) => align ? align : "center"};
    width: ${({width}) => width ? width : "none"};
    flex-wrap: wrap;
    margin-bottom: 10px;
`
export const Card = styled.div`
    display: flex;
    width: 200px;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    padding: 10px;
    background-color: ${primary.verde};
    margin: 10px;
    color: #fff;
    text-align: center;
    /* font-weight: 600; */
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.12);

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 1;
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #1976d2;
    margin: 10px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.12);

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 1;
    }
`


