import styled from 'styled-components'
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 0px 10px;
    box-shadow: 10px 0px 10px #00000019;
`
export const Header = styled.div`
    display: flex;
    /* justify-content: ce; */
    align-items: center;
    width: ${({flex, width}) => flex ? width ? width+"%" : "none" : "100%"};
    flex: ${({flex}) => flex ? "1" : "none"};
    /* padding: 10px; */
    flex-direction: ${({header}) => header ? "row" : "column"};
`
export const HeaderArea = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({header, bg}) => header ? bg ? bg : admin.cinza : bg ? bg : "transparent"};
    border-top-left-radius: ${({header}) => header ? "5px" : "none"};
    border-top-right-radius: ${({header}) => header ? "5px" : "none"};
    padding: ${({header, padding}) => header ? padding ?? "10px" : padding ?? "5px"};
    display: flex;
    flex-direction: ${({header}) => header ? "row" : "column"};
    justify-content: center;
    align-items: ${({align}) => align ? align : "flex-start"} ;
    border-right: ${({br, color}) => br ? "1px solid"+ color : "none"};
    color: ${({color}) => color ? color : "#000"};
    border-bottom: ${({border}) => border ? `1px solid ${admin.cinza}` : "none"} ;
`
export const HeaderTitle = styled.div`
    /* flex: ${({flex}) => flex ?? 1}; */
    height: 35px;
    width: 100%;
    font-size: ${({size}) => size ?? 14}px;
    font-weight: ${({weight}) => weight ?? 600};
    display: flex;
    justify-content: center;
    align-items: ${({align}) => align ?? "center"};
    margin-top: ${({mt}) => mt ?? "0"}px;
    text-align: center;
    color: ${({color}) => color ? color : admin.dark};
    border-right: ${({br, color}) => br ? "1px solid"+ color : "none"};
    border-bottom: ${({border}) => border ? `1px solid ${admin.cinza+99}` : "none"} ;
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