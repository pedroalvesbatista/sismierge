import styled from 'styled-components'
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { primary, second } from '../../constants/tailwind/colors'

export const Area = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${primary.cinza};
    display: flex;
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    font-size: 30px;
    font-weight: 600;
    color: ${primary.cinza};
    background-color: ${primary.verde};
    border-radius: 0px 50% 50% 0px / 0% 60% 40% 20%;
`
export const Rigth = styled.div`
    flex: 1;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding: 0px 10%;
`
export const TitleArea = styled.div`
    font-size: ${({size}) => size ?? '20'}px !important;
    line-height: 2.5rem/* 16px */ !important;
    font-weight: bold;
`
export const TextArea = styled.div`
    font-size: ${({size}) => size ?? '12'}px !important;
    line-height: 1.5rem/* 16px */ !important;
    cursor: pointer;
    color: ${({color}) => color ?? primary.verde};

    &:hover {
        text-decoration: underline;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
export const InputArea = styled.div`
    margin: 8px 0px;
    width: 100%;
    height: 42px;
    border-radius: 5px;
    display: flex;
    flex-direction: ${({row}) => row ? "row" : "column"};
    background-color: white;
    align-items: ${({row}) => row ? "center" : "none"};
    padding: 0px 15px;
    position: relative;
    
    cursor: ${({disabled}) => disabled && "no-drop"};
    opacity: ${({disabled}) => disabled && "0.6"};
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* padding: 5px 0px; */
    cursor: ${({disabled}) => disabled && "no-drop"};
`
export const Label = styled.span`
    position: absolute;
    /* margin-bottom: 10px; */
    top: 0px;
    /* background-color: red; */
    color: ${primary.dark}89;
    font-size: 12px;
`
export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 14px;
    border: none;
    margin-top: ${({row}) => row ? "none" : "10px"};
    background-color: transparent;

    &:disabled{
        cursor: no-drop;
    }
`
export const IconeEye = styled(BsEye)`
    margin-left: 5px;
    cursor: pointer;
    color: ${primary.dark}
`
export const IconeEyeSplash = styled(BsEyeSlash)`
    margin-left: 5px;
    cursor: pointer;
    color: ${primary.dark}
`
export const ConexioArea = styled.div`
    display: flex;
    justify-content: ${({flexEnd}) => flexEnd ? "flex-end" : "space-between"};
    align-items: center;
    margin-top: 10px;
`
export const Button = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    background-color: ${primary.verde};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    border-radius: 20px;

    &:hover {
        background-color: ${second.verde};
    }
`
