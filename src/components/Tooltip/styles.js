import styled from 'styled-components'
import { MdHelp } from 'react-icons/md';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { admin, primary } from '../../constants/tailwind/colors'

export const Area = styled.div`
    position: relative;
    z-index: 50;

`
export const Container = styled.div`

`
export const Text = styled.span`
    position: absolute;
    background-color: ${admin.dark};
    color: #fff;
    font-size: 10px;
    padding: 5px;
    top: -100%;
    left: 100%;
    width: 200px;
    cursor: help;
`
export const IconHelp = styled(MdHelp)`
    color: ${admin.verde};
    cursor: help;
`
export const IconArrow = styled(RiArrowLeftSFill)`
    position: absolute;
    top: 10%;
    left: -15%;
    color: ${admin.dark};
    font-size: 20px;
`