import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    flex: 6;
    margin-right: 20px;
    margin-left: 20px;
    /* padding: 0px 20px; */
    /* align-items: center; */
    /* padding: 50px; */
`
export const TextArea = styled.div`
    font-size: 30px;
`
export const HeaderArea = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0px 20px;
    margin-bottom: 40px;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: 200px;
    height: 150px;
    cursor: pointer;
    padding: 20px;
    background-color: ${primary.roxo};
    margin: 0px 10px 0px 0px;
    color: ${primary.cinza};
    text-align: center;
    font-weight: 600;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34); 
    box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34);

    &:active{
        opacity: 0.79;
    }
`

