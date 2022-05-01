import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import { admin, primary } from '../../constants/tailwind/colors'

export const SearchArea = styled.form`
    display: flex;
    align-items: center;
    width: 300px;
    height: 30px;
    border-bottom: 2px solid #c3c7c9;
    /* flex: 1; */
    /* margin: 0px 5%; */
    padding: 20px 10px;
    border-radius: 5px;
    background-color: #fff;

`
export const IconSearch = styled(BiSearch)`
    color: ${primary.dark};
    margin-right: 10px;

`
export const Input = styled.input`
    /* flex: 1; */
    background-color: transparent;
    outline: none;
    width: 100%;
`