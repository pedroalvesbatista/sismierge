import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    

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