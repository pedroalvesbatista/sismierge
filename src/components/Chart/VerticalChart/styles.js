import styled from 'styled-components'
import { primary } from '../../../constants/tailwind/colors'

export const Container = styled.div`
    width: 100px;
    height: 100px;
    perspective: 1000px;
    /* margin: 0px 10px; */
    transform: ${({percent}) => percent ? `scale(0.3, ${percent})` : 'scale(0.3, 0.4)'};
    background-color: black;
`
export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    color: ${primary.roxo};
    font-size: 30px;
    margin-top: 10px;
`

export const Cube = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-8deg) rotateY(40deg) ;
`
export const Side = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
export const Top = styled(Side)`
    background-color: ${primary.roxo};
    /* height: 140px; */
    transform: rotateX(90deg) translateZ(50px);
`
export const Bottom = styled(Side)`
    background-color: ${primary.cinza};
    /* height: 140px; */
    transform: rotateX(-90deg) translateZ(50px);
`
export const Left = styled(Side)`
    background-color: #cc43b7;
    /* height: 140px; */
    transform: rotateY(-90deg) translateZ(50px);
`
export const Right = styled(Side)`
    background-color: ${primary.verde};
    /* height: 140px; */
    transform: rotateY(90deg) translateZ(50px);
`
export const Front = styled(Side)`
    background-color: #6b2260;
    transform: rotateX(0deg) translateZ(50px);
`
export const Back = styled(Side)`
    background-color: yellow;
    transform: rotateX(-180deg) translateZ(50px);
`
