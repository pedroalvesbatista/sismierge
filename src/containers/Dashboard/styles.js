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
    padding: ${({padding}) => padding ? padding : "0"}px;
    margin-bottom: ${({mb}) => mb ? mb : "0px"};
    margin-left: ${({ml}) => ml ? ml : "0px"};
    margin-right: ${({mr}) => mr ? mr : "0px"};
    background-color: ${({bg}) => bg ? bg : "none"};
    display: flex;
    align-items: center;
    border-radius: 5px;
`
export const Container = styled.div`
    display: flex;
    padding: ${({padding}) => padding ? padding : "0"};
    background-color: ${({bg}) => bg ? bg : "none"};
    flex: ${({width, flex}) => width ? "none" : flex ? flex : "1"};
    width: ${({width, flex}) => flex ? "none" : width ? width : "none"};
    height: ${({height}) => height ? height : "none"};
    /* background-color: aliceblue; */
    justify-content: ${({justify}) => justify ? justify : "none"};
    flex-direction: ${({column}) => column ? "column" : "row"};
    align-items: ${({align}) => align ? align : "center"};
    flex-wrap: ${({wrap}) => wrap ? "wrap" : "nowrap"};
    /* padding: 0px 20px; */
    margin-bottom: 0px;
`
export const CardArea = styled.div`
    display: flex;
    flex-wrap: ${({wrap}) => wrap ? "wrap" : "nowrap"};
    justify-content: ${({justify}) => justify ? justify : "none"};
    flex-direction: ${({column}) => column ? "column" : "row"};
    align-items: ${({align}) => align ? align : "center"};
    font-size: 14px;
    padding: 20px;
    height: ${({height}) => height ? height : "none"};
    flex: ${({width, flex}) => width ? "none" : flex ? flex : "1"};
    width: ${({width, flex}) => flex ? "none" : width ? width : "none"};
    background-color: #fff;
    margin: 10px 10px 0px 0px;
    font-weight: 600;
    border-radius: 5px;
    /* -webkit-box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34);  */
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.34);
    border: 1px solid ${admin.cinza};
`

