import styled from 'styled-components'
import { primary } from '../../../constants/tailwind/colors'

export const Area = styled.div`
    position: relative;
    font-size: 10px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
    /* color: #000; */
    /* background-color: yellow; */
`
export const Svg = styled.svg`
    width: 80px;
    height: 80px;    
    transform: rotate(-90deg);
    overflow: initial;
    position: relative;
`
export const Title = styled.span`
    color: ${primary.dark};
    position: absolute;
    top: 26px;
    left: 35px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Circle = styled.circle`
    stroke-width:5px;
    fill:none; 
    position: relative;
`
export const Circle1 = styled(Circle)`
position: relative;
`
export const Circle2 = styled(Circle)`
position: relative;
    stroke-dasharray: 100;
    /* stroke-dashoffset: ${(props) => props.percent ? `calc(100 - ${props.percent})` : 'calc(100 - 100)'}; */
    stroke: ${({second}) => second ? primary.verde : primary.roxo }; 
    /* position: relative;
    z-index: 1; */
`

