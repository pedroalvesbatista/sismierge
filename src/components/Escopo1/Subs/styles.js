import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { admin, second } from '../../../constants/tailwind/colors'
import InputMask from "react-input-mask";

export const Area = styled.div`
    margin: 8px 0px;
    margin-top: ${({spanceTop}) => spanceTop ? spanceTop : '8px'};
    /* flex: ${({width}) => width ? "none" : 1}; */
    margin-left: ${({spanceLeft}) => spanceLeft ? '20px' : 'none'};
    margin-right: ${({spanceRight}) => spanceRight ? '20px' : 'none'};
    width: ${({width}) => width ?? "82%"};
    border-radius: 10px;
    /* background-color: #00000069; */
    box-shadow: 0px 0px 27px -5px rgba(0,0,0,0.23);
    transition: all ease 1.s;
    height: ${({overflow}) => overflow ? "500px" : "none"};
    overflow-y: ${({overflow}) => overflow ? "auto" : "none"};
    padding: 10px;
`

export const HeaderSelect = styled.div`
    width: ${({width}) => width ?? "100%"};
    padding: 10px;
    background-color: ${({bgColor}) => bgColor ?? "#1976d2"};
    color: ${({color}) => color ?? "#fff"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: ${({mb}) => mb ?? "none"};
    font-weight: ${({weight}) => weight ?? "none"};
    font-size: ${({size}) => size ?? "16px"};

    &:hover{
        opacity: ${({notHover}) => notHover ? "none": 0.8};
    }
    &:active{
        opacity: ${({notHover}) => notHover ? "none": 1};
    }
`
export const ArrowIcon = styled(IoIosArrowDown)`
    font-size: 18px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 1;
    }
`
export const ArrowIconUp = styled(IoIosArrowUp)`
    font-size: 18px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 1;
    }
`
export const CardArea = styled.div`
    /* border-radius: 5px; */
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 10px;
    border: 2px solid #1976d279;
    border-top: none;
    margin-bottom: ${({mb}) => mb ?? "none"};
`

export const Text = styled.div`
    font-weight: 600;
    color: ${admin.dark};
    display: flex;
    padding: 5px;
    font-size: ${({size}) => size ?? "14"}px;
    /* margin-bottom: px; */
`
export const File = styled.label`
    height: 40px;
    width: 100%;
    cursor: pointer;
    display: flex;
`
export const InputEntreArea = styled.div`
/* background-color: red; */
    flex: ${({flex}) => flex ?? 1};
    display: flex;
    justify-content: ${({justify}) => justify ?? "flex-strat"};
    align-items: ${({align}) => align ?? "center"};
    flex-wrap: wrap;
`
export const InputResultatArea = styled.div`
    flex: ${({flex}) => flex ?? 1};
    /* height: 100%; */
    /* background-color: yellow; */
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({justify}) => justify ?? "flex-strat"};
    align-items: ${({align}) => align ?? "center"};
`
export const InputResultatEntry = styled.div`
    flex: ${({flex}) => flex ?? 1};
    height: 100%;
    /* background-color: yellow; */
    display: flex;
    justify-content: ${({justify}) => justify ?? "flex-strat"};
    align-items: ${({align}) => align ?? "center"};
`
export const SpaceArea = styled.div`
    /* flex: ${({flex}) => flex ?? 1}; */
    /* background-color: green; */
    width: 20%;
    /* height: 20px; */
    display: flex;
    justify-content: ${({justify}) => justify ?? "flex-strat"};
    align-items: ${({align}) => align ?? "center"};
`
export const Left = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px;
    color: ${admin.dark}87;
    font-weight: 400;
    font-size: 14px;
`
export const AreaRadio = styled.div`
    
`
export const LabelRadio = styled.label`
    padding: 0px;
    display: inline-flex;
    cursor: pointer;
    transition: background .2s ease;
    /* margin: 8px 0; */
    -webkit-tap-highlight-color: transparent;
    
    &:hover,
    &:focus-within {
        background: rgba(#9F9F9F,.1)
    }
        
`
export const InputRadio = styled.input`
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: none;
    border: 0;
    box-shadow: inset 0 0 0 1px ${admin.cinza};
    box-shadow: inset 0 0 0 1.5px ${admin.cinza};
    appearance: none;
    padding: 0;
    margin: 0;
    transition: box-shadow 150ms cubic-bezier(.95,.15,.5,1.25);
    pointer-events: none;
  
    &:focus {
        outline: none
    } 
    
    &:checked {
        box-shadow: inset 0 0 0 6px ${admin.verde}
    }
`
export const SpanRadio = styled.span`
    vertical-align: middle;
    display: inline-block;
    line-height: 20px;
    padding: 0 8px;
`
    
    