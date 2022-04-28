import styled from 'styled-components'
import { primary } from '../../../constants/tailwind/colors'

export const Container = styled.div`
    width: 100%;
    /* height: 100px; */
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${primary.cinza};
    /* padding: 10px; */
    background-color: ${primary.cinza};
`
export const Li = styled.li`
    border-bottom: 4px solid ${({active}) => active ? `${primary.verde}` : 'none'};
    font-size: 14px;
    flex: 1;
    font-weight: 600;
    text-align: center;
    color: ${primary.dark};
    cursor: pointer;
    background-color: ${'#fff'};
    margin: 0px 5px;
    padding: 2px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({active}) => active ? `1` : '0.7'};
    /* border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 0px 2px #00000099; */
    box-shadow: ${({active}) => active ? `5px 5px 20px -3px rgba(0,0,0,0.34)` : 'none'};

    &:hover{
        opacity: ${({active}) => active ? `0.9` : '0.8'};
    }
    &:active{
        opacity: 0.6;
    }
`
