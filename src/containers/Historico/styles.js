import styled from 'styled-components'
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
`
export const HeaderArea = styled.div`
    width: 100%;
    /* height: 40px; */
    background-color: ${({header}) => header ? admin.cinza : "transparent"};
    border-top-left-radius: ${({header}) => header ? "5px" : "none"};
    border-top-right-radius: ${({header}) => header ? "5px" : "none"};
    padding: ${({header, padding}) => header ? "10px" : padding ?? "5px"};
    display: flex;
    flex-direction: ${({header}) => header ? "row" : "column"};
    justify-content: center;
    align-items: flex-start;
    /* border-bottom: ${({header}) => header ? "none" : "2px solid #cecece"}; */
`
export const HeaderTitle = styled.div`
    flex: ${({flex}) => flex ?? 1};
    font-size: 14px;
    font-weight: ${({weight}) => weight ?? 600};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({color}) => color ? admin.dark : admin.dark};
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${admin.cinza+99};
    padding: 10px 0px;
    cursor: pointer;

    &:hover{
        box-shadow: 10px 0px 10px #00000019;
    }
`