import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: c; */
    /* background-color: black; */
    transition: all .2s ease-out;
    height: 70px;
    padding: 0px 1%;
    border-bottom: 1px solid ${admin.dark+29};
`
export const Div = styled.div`
    flex: 1;
`
export const TitleArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    flex: 2;
    transition: all .2s ease-out;
    /* margin: 10% 0% 0px 10%; */
`
export const SearchArea = styled.form`
    display: flex;
    align-items: center;
    width: 300px;
    height: 30px;
    border-bottom: 2px solid #c3c7c9;
    flex: 1;
    margin: 0px 5%;
    /* background-color: aliceblue; */
`
export const IconSearch = styled(BiSearch)`
    color: ${primary.dark};
    margin-right: 10px;
`
export const Input = styled.input`
    /* flex: 1; */
    background-color: transparent;
    outline: none;
`