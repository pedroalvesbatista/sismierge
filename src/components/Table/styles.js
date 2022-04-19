import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Container = styled.div`
    display: flex;
    margin: 10px 20px;
    flex-direction: column;
    width: 100%;
    /* margin-top: 20px; */
`
export const Input = styled.input`
    outline: none;
    width: 100%;
    /* padding: 10px; */
    /* margin-top: 20px; */
`
export const TitleArea = styled.div`
    /* width: 92.3%; */
    /* background-color: ${primary.roxo}; */
    color: #000;
    font-weight: 400;
    padding: 10px;
`
export const AreaBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`
export const TableArea = styled.table`
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
        border: 1px solid ${primary.roxo};
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
// for (let index = 0; index < ex.length; index++) {
//     if (ex[index].innerHTML == 'Arthur Aguiar') {
//         console.log(`Achou: ${ex[index].innerHTML}`);
//     }
    
// }


// function handleArthur() {
//     let ex= document.querySelectorAll('div')
//     let arthur= [...ex].filter(i => i.innerHTML == 'Arthur Aguiar')
//     ex1[3].click()
//     return arthur
// }
// function handleCheckRobot() {
//     let checkRobot= document.querySelector("#checkbox").click()
//     return checkRobot
// }
// function handleBack() {
//     let back= document.querySelectorAll('button[type="button"]')[8].click()
//     return back
// }

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * max ) + min;
// }

// let countVote= 0

// function start() {
//     setTimeout(() => {
//         handleArthur()
//     }, 3000);

//     setTimeout(() => {
//         handleCheckRobot()
//     }, 6000);
    
//     setTimeout(() => {
//         handleBack()
//         countVote.push(countVote + 1)
//     }, 9000);
// }

// setInterval(() => {
//     console.log("Você voutou " + countVote + `${countVote > 1 ? " vezes" : "vez"}`);
//     start()
// }, getRndInteger(10000, 15000));