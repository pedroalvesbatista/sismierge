import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import { primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const TitleArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 38px;
    font-weight: bold;
    flex: 1;
`
export const SearchArea = styled.form`
    display: flex;
    align-items: center;
    width: 300px;
    height: 30px;
    border-bottom: 2px solid #c3c7c9;
    flex: 1;
    /* background-color: aliceblue; */
`
export const IconSearch = styled(BiSearch)`
    color: ${primary.dark};
    margin-right: 10px;
`
export const Input = styled.input`
    flex: 1;
    background-color: transparent;
    outline: none;
`