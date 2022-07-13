import styled from 'styled-components'
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
export const Text = styled.div`
    font-size: ${({size}) => size ?? 14}px;
    font-weight: ${({weight}) => weight ?? 400};
    color: ${({color}) => color ?? admin.dark};
    height: ${({height}) => height ? height : "none"};
    width: ${({width}) => width ? width : "none"};
    margin-top: ${({mt}) => mt ? mt : "0px"};
    margin-bottom: ${({mb}) => mb ? mb : "0px"};
    margin-left: ${({ml}) => ml ? ml : "0px"};
    margin-right: ${({mr}) => mr ? mr : "0px"};
    background-color: ${({bg}) => bg ? bg : "none"};
`
export const Container = styled.div`
    display: flex;
    width: 100%;
    /* background-color: aliceblue; */
    justify-content: center;
    flex-direction: ${({column}) => column ? "column" : "row"};
    align-items: center;
    /* padding: 0px 20px; */
    margin-bottom: 40px;
`
export const Card = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: ${({column}) => column ? "column" : "row"};
    align-items: center;
    font-size: 14px;
    padding: 20px;
    height: ${({height}) => height ? height : "none"};
    width: ${({width}) => width ? width : "none"};
    background-color: #fff;
    margin: 0px 10px 0px 0px;
    font-weight: 600;
    border-radius: 5px;
    /* -webkit-box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34);  */
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.34);
    border: 1px solid ${admin.cinza};
`

