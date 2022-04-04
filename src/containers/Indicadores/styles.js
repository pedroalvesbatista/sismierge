import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
`
export const DashboardArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
export const GraphicArea = styled.div`
    display: flex;
    justify-content: center;
    /* margin-bottom: 20px; */
    /* align-items: center; */
`
export const Title = styled.span`
    color: ${primary.roxo};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Header =  styled.div`
    background-color: ${primary.cinza};
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #cecece;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    font-weight: 500;
`
export const Left = styled.div`
    flex: 1;
    border: 2px solid rgba(134, 134, 135, 0.4);
    height: 480px;
    background-color: #fff;
    border-radius: 5px;
    margin-left: 10px;
`
export const AreaDash = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
`
export const Rigth = styled(Left)`
    flex: 2;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: space-between; */
`
export const AreaChart = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
    margin-top: 20px;
`
export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 60px;
    text-align: center;
`
export const BorderArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    color: ${primary.verde};
    font-weight: 600;
    border: 2px solid ${primary.verde};
`


