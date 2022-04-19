import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* min-height: 100%;
    background-color: aliceblue; */
    /* padding: 50px; */
`
export const SelectArea = styled.select`
    width: 90%;
    height: 40px;
    /* background-color: transparent; */
    border: 2px solid ${primary.verde};
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34); 
    box-shadow: 5px 5px 20px -3px rgba(0,0,0,0.34);
    padding: 0px 10px;
    outline: none;

    &:active{
        outline: none;
    }
`
export const WarnArea = styled.div`
    width: 90%;
    height: 300px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const Dropdown = styled.ul`
    width: 90%;
    margin-top: 20px;
    /* background-color: #000; */
    /* border-radius: 10px; */
    display: flex;
    flex-direction: column;
`
export const Divisor= styled.div`
    width: 100%;
    height: 2px;
    background-color: ${primary.cinza};
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    cursor: pointer;

    &:hover{
        background-color: ${primary.verde};
        color: #fff;
    }
`
export const TitleListItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    font-weight: bold;
`
export const VisorArea = styled.div`
    width: 95%;
    /* margin-top: 40px; */
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px ;
`
export const TitleVisor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
`
export const Table = styled.table`
    margin-top: 20px;
`
export const Thead = styled.thead`
    
`
export const Tr = styled.tr`

`
export const Th = styled.th`
    font-weight: 600;
    background-color: ${primary.verde};
    color: #fff;
    flex: 1;
    padding: 10px 20px;
    /* border: 1px solid ${primary.cinza}; */
    font-size: 12px;
`
export const Td = styled.td`
    border: 1px solid ${primary.cinza};
    padding: 5px 10px;
    outline: none;

    &:hover{
        border: 2px solid ${primary.roxo};
    }
`
export const Tbody = styled.tbody`
`
export const MoreTable = styled.div`
    width: 40px;
    height: 35px;
    border-radius: 10px;
    background-color: ${(props) => props.delete ? primary.cinza : primary.roxo};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 5px;
    font-size: 20px;
    margin: 10px 0px 0px 20px;
    box-shadow: 3px 3px 10px -3px rgba(0,0,0,0.34);
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 1;
    }

`
export const Button = styled.div`
    padding: 10px 30px;
    border-radius: 6px;
    background-color: ${(props) => props.color === 'verde' ? primary.verde : props.color === 'roxo' ? primary.roxo : primary.cinza};
    color: #${(props) => props.color ? 'fff' : '000'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    /* padding-bottom: 5px; */
    font-size: 14px;
    margin: 10px 0px 0px 20px;
    box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.34);
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 1;
    }

`