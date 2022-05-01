import React from 'react'
import styled from 'styled-components'
import { MdOutlineNotifications } from 'react-icons/md'
import { admin } from '../../constants/tailwind/colors'
import Avatar from '../Avatar'

function RightHeader({ name = "jULIANA ferreira" }) {
    
    function firstLetterCase(name) {
        const firstletter= name[0].toUpperCase()
        const otherletter= name.slice(1).toLowerCase()
        const result= firstletter.concat(otherletter)
        return result
    }
    
    const firstName= firstLetterCase(name?.split(" ")[0])
    const secondName= firstLetterCase(name?.split(" ").length > 1 && name?.split(" ")[1])

  return (
    <Area>
        <Left>
            <Avatar name={name} />
            <Text> {`${firstName} ${secondName}`} </Text>
        </Left>
        <NotificationIcon />
    </Area>
  )
}

const Area = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
`
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.span`
    font-size: 400;
    color: ${admin.dark};
    margin-left: 10px;
    font-size: 18px;
`
const NotificationIcon= styled(MdOutlineNotifications)`
    color: ${admin.dark};
    width: 40px;
    height: 40px;
    background-color: #fff;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    padding: 0px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: ${({radius}) => radius ? "50%" : "5px"};

    &:hover{
        background-color: rgba(255, 255, 255, 0.744);
    }
    &:active{
        background-color: rgba(255, 255, 255, 0.9);
    }
`

export default RightHeader