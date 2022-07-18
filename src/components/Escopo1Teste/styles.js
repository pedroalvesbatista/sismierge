import styled from 'styled-components'
import { SiDatabricks } from 'react-icons/si'
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    width: ${({width}) => width ? width : "100%"};
    height: ${({height}) => height ? height : "100%"};
    justify-content: ${({justify}) => justify ? justify : "none"};
    align-items: ${({align}) => align ? align : "center"};
    overflow-x: ${({scroll}) => scroll ? "scroll" : "none"};
    /* overflow-y: hidden; */
    /* background-color: red; */
    /* padding: 50px; */
`
export const TextArea = styled.span`
    font-size: ${({size}) => size ?? 20}px;
    color: ${({color}) => color ?? admin.dark};
    font-weight: ${({font}) => font ?? 400};
    text-align: ${({textAlign}) => textAlign ?? "center"};
`
export const ContentArea = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify ? justify : "none"};
    align-items: ${({align}) => align ? align : "center"};
    width: ${({width}) => width ? width : "none"};
    height: ${({height}) => height ? height : "none"};
    flex-wrap: ${({nowrap}) => nowrap ? "nowrap" : "wrap"};
    margin-bottom: 10px;
    flex-direction: ${({column}) => column ? "column" : "row"};
    background-color: ${({bg}) => bg ?? "none"};
    
    border-radius: ${({radius}) => radius ? "5px" : "none"};
    padding: ${({padding}) => padding ? padding : "none"};
`
export const HeaderArea = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify ? justify : "none"};
    align-items: ${({align}) => align ? align : "center"};
    width: ${({width}) => width ? width : "none"};
    height: ${({height}) => height ? height : "none"};
    flex: none;
    /* height: ${({height}) => height ? height : "none"}; */
    /* flex-wrap: wrap; */
    margin-bottom: 10px;
    flex-direction: ${({column}) => column ? "column" : "row"};
    background-color: ${({bg}) => bg ?? admin.cinza};
`
export const InputArea = styled.input`
    display: flex;
    justify-content: ${({justify}) => justify ? justify : "none"};
    align-items: ${({align}) => align ? align : "center"};
    width: ${({width}) => width ? width : "none"};
    height: ${({height}) => height ? height : "none"};
    flex: none;
    /* height: ${({height}) => height ? height : "none"}; */
    /* flex-wrap: wrap; */
    margin-bottom: 10px;
    flex-direction: ${({column}) => column ? "column" : "row"};
    background-color: ${({bg}) => bg ?? admin.cinza};
    outline: none;
    border: 1px solid ${admin.cinza};
`
export const Card = styled.div`
    display: flex;
    width: ${({width}) => width ? width : "200px"};
    height: ${({height}) => height ? height : "80px"};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    word-wrap: break-word;
    word-break: break-all;
    flex-wrap: wrap;
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
export const IconDoc = styled(SiDatabricks)`
    color: ${admin.verde};
    font-size: 70px;
`


