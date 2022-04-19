import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    /* width: 500px; */
    height: 100px;
    flex: 2;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.08);
    padding: 5px;
    justify-content: space-between;
    align-items: center;
`
export const Card = styled.div`
    flex: 1;
    position: relative;
    height: 70px;
    background-color: ${'#fafafa'};
    border-radius: 10px;
    margin: 0px 5px;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.14);
    display: flex;
    /* box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.08); */
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.6;
    }
    
`
export const Text = styled.div`
    color: ${({color}) => color ? '#1f1d1d' : primary.dark};
    font-size: ${({size}) => size ? '11px' : '18px'};
    font-weight: ${({bold}) => bold ? 'bold' : 'none'};
    /* text-align: start; */
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
`

