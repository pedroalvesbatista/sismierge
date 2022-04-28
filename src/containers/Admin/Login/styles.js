import styled from 'styled-components'
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { admin, second } from '../../../constants/tailwind/colors'

export const Area = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${admin.cinza};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Card = styled.div`
    display: flex;
    height: 550px;
    width: 550px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 0px 10%; */
`
export const AreaLogo = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    /* padding: 0px 30px; */
    /* background-color: red; */
`
export const Logo = styled.img.attrs(({src}) => ({
    src: '/icon.jpg'
}))`
    width: 100px;
    height: 100px;
    object-fit: contain;
    cursor: pointer;
`
export const Text = styled.div`
    font-size: ${({size}) => size ?? '30'}px !important;
    /* line-height: 2.5rem16px !important; */
    font-weight: ${({fontSize}) => fontSize ?? '600'};
    color: ${({color}) => color ? "#5e5757" : "#000"};
    /* margin-bottom: 10px; */
`
export const TextArea = styled.div`
    font-size: ${({size}) => size ?? '12'}px !important;
    line-height: 1.5rem/* 16px */ !important;
    cursor: pointer;
    color: ${({color}) => color ?? admin.verde};

    &:hover {
        text-decoration: underline;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 40px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
export const InputArea = styled.div`
    margin: 8px 0px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    display: flex;
    background-color: white;
    align-items: center;
    padding: 0px 15px;
    border: 2px solid ${admin.cinza};

    &:focus{
        border-color: ${admin.verde};
    }
`
export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 14px;
    border: none;
`
export const IconeEye = styled(BsEye)`
    margin-left: 5px;
    cursor: pointer;
    color: ${admin.dark}
`
export const IconeEyeSplash = styled(BsEyeSlash)`
    margin-left: 5px;
    cursor: pointer;
    color: ${admin.dark}
`
export const ConexioArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
export const Button = styled.div`
    cursor: pointer;
    width: 100px;
    height: 30px;
    background-color: ${admin.verde};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    border-radius: 20px;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 1;
    }
`
