import styled from 'styled-components'
import { admin, second } from '../../constants/tailwind/colors'
import InputMask from "react-input-mask";

export const Area = styled.div`
    margin: 8px 0px;
    margin-top: ${({spanceTop}) => spanceTop ? spanceTop : '8px'};
    flex: ${({width}) => width ? "none" : 1};
    margin-left: ${({spanceLeft}) => spanceLeft ? spanceLeft ?? '20px' : 'none'};
    margin-right: ${({spanceRight}) => spanceRight ? spanceRight ?? '20px' : 'none'};
    width: ${({width}) => width ?? "none"};
    transition: all ease 1.s;
`

export const InputArea = styled.div`
    /* width: 100%; */
    position: relative;
    opacity: ${({disabled}) => disabled === "true" && "0.5"};
    height: ${({height}) => height ?? 400}px;
    border-radius: 5px;
    display: flex;
    background-color: white;
    align-items: center;
    padding: ${({isFile}) => isFile ? "0px" : "0px 15px"};
    border: 2px solid ${admin.cinza};

    &:focus{
        border-color: ${admin.verde};
    }
`
export const InputEntry = styled(InputMask)`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: ${({size}) => size ?? "14"}px;;
    border: none;
    display: ${({isFile}) => isFile ? 'none' : 'block'};
`
export const TextArea = styled.textarea`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 14px;
    border: none;
    padding: 5px;
    resize: none;
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
export const Rigth = styled.div`
    flex: 1;
    background-color: ${admin.dark}25;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: ${admin.dark}67;
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
    
    