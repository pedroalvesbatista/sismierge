import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    position: relative;
    font-size: 26px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
    /* background-color: yellow; */
`
export const Svg = styled.svg`
    width: 150px;
    height: 150px;    
    transform: rotate(-90deg);
    overflow: initial;
`
export const Title = styled.span`
    color: ${primary.roxo};
    position: absolute;
    top: 37%;
    left: 35%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Circle = styled.circle`
    stroke-width:15px;
    fill:none; 
`
export const Circle1 = styled(Circle)`
`
export const Circle2 = styled(Circle)`
    stroke-dasharray: 100;
    /* stroke-dashoffset: ${(props) => props.percent ? `calc(100 - ${props.percent})` : 'calc(100 - 100)'}; */
    stroke: ${primary.roxo}; 
    /* position: relative;
    z-index: 1; */
`

