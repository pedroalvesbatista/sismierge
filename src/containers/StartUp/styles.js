import styled from 'styled-components'
import { AiOutlineCheck } from 'react-icons/ai'
import { admin, second } from '../../constants/tailwind/colors'

export const Area = styled.div`
    width: 100%;
    height: calc(100vh - 110px);
    /* background-color: ${admin.verde}47; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
`
export const StepArea = styled.div`
    /* width: 20%; */
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    /* justify-content: center; */
    /* background-color: aliceblue; */
    /* align-items: center; */
`
export const ContainerStep = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    /* align-items: center; */
`
export const HeaderStep = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    z-index: 10;
`
export const IconArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: ${({active, prev}) => active ? prev ? "4px" : "6px" : "8px"};
    background-color: ${({active}) => active ? admin.roxo : "#cecece"};
    margin-left: ${({active, prev}) => active ? prev ? "5px" : "0px" : "5px"};
    box-shadow: ${({active}) => active ? "0px 0px 18px 1px rgba(0,0,0,0.22)" : "none"};
    /* box-shadow: 0px 0px 14px 0px #000000; */
`
export const TitleStep = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({active}) => active ? admin.roxo : "#cecece"};
    font-size: ${({active}) => active ? "16px" : "14px"};
    font-weight: ${({active}) => active ? "bold" : "normal"};
    margin-left: 20px;
    opacity: ${({active}) => active ? "1" : "0.8"};
`
export const IconCheck = styled(AiOutlineCheck)`
    color: #fff;
    font-size: ${({active, prev}) => active ? prev ? "10px" : "14px" : "10px"};
`
export const Fio = styled.div`
    width: 3px;
    height: 100%;
    background-color: ${({active}) => active ? admin.roxo : "#cecece"};
    margin-left: 12.5px;
    position: absolute;
    top: 100px;
`
export const FooterCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${admin.cinza};
    /* align-items: center; */
`
export const Card = styled.div`
    display: flex;
    max-height: 700px;
    /* width: 650px; */
    flex: 2;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px 2%;
    /* overflow-y: scroll; */
`
