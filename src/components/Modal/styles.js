import styled from 'styled-components'
import { primary, second } from '../../constants/tailwind/colors'
import { GrClose } from 'react-icons/gr'

export const Area = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${primary.verde}81;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-shadow: 5px 0px 6px -2px rgba(0,0,0,0.10);
    position: fixed;
    top: 0;
    left: 0;
`
export const Card = styled.div`
    width: 700px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 6px -2px rgba(0,0,0,0.50);
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 5px 0px; */
`
export const Separator = styled.div`
    width: 100%;
    border-bottom: 1px solid ${primary.cinza}69;
    padding: 5px 0px;
`
export const Text = styled.div`
    color: ${primary.dark};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
`
export const IconClose = styled(GrClose) `
    color: ${primary.cinza};
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 1;
    }
`
