import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineNotifications } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'

import { admin } from '../../constants/tailwind/colors'
import Avatar from '../Avatar'
import DropDown from '../Dropdown'

function RightHeader({ name = "unidade leste" }) {
    const [stateName, setStateName] = useState(name)
    const [mouseEnter, setMouseEnter] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const unidades= ["Unidade leste campo", "campo grande", "Sudeste"]
    
    function firstLetterCase(name) {
        const firstletter= name[0]?.toUpperCase()
        const otherletter= name?.slice(1)?.toLowerCase() 
        const result= firstletter?.concat(otherletter)
        return result
    }
    
    const firstName= (nameLetter) => firstLetterCase(nameLetter?.split(" ")[0])
    const secondName= (nameLetter) => firstLetterCase(nameLetter?.split(" ").length > 1 ? nameLetter?.split(" ")[1] : nameLetter)

    const handleDropdown = (e) => {
        setDropdown(!dropdown)
    }

  return (
    <Area>
        {/* <Left mouseEnter={mouseEnter}  onMouseEnter={() => setMouseEnter(!mouseEnter)} onMouseLeave={() => setMouseEnter(!mouseEnter)}>
            <Avatar onClick={handleDropdown} mouseEnter={mouseEnter}  name={stateName} />
            <Text onClick={handleDropdown} mouseEnter={mouseEnter} > 
                {stateName.split(" ").length > 1 ? `${firstName(stateName)} ${secondName(stateName)}` : firstName(stateName)} 
            </Text>
            <ArrowIcon onClick={handleDropdown} mouseEnter={mouseEnter}  />
            {dropdown && 
                <DropDown>
                    {unidades.map((item, index) => (
                        <AreaDropdown onClick={() => setStateName(item)} key={index}>
                            <Avatar name={item} mouseEnter={mouseEnter}   />
                            <Text size={""} onClick={handleDropdown} mouseEnter={mouseEnter} > 
                                {item.split(" ").length > 2 ? 
                                    `${firstLetterCase(item).split(" ").slice(0, 1) + " " + firstLetterCase(item).split(" ").slice(1, 2)}` : firstLetterCase(item)} 
                            </Text>
                        </AreaDropdown>
                    ))}
                </DropDown>
            }
        </Left> */}
        <NotificationIcon />
    </Area>
  )
}

const Area = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-left: 30px;
    position: relative;

    &:hover{
        color: ${admin.dark};
    }
    &:active{
        color: ${admin.dark}89;
    }
`
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const AreaDropdown = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: ${admin.verde}19;
        border-bottom: "none";
    }
    &:active{
        background-color: ${admin.verde};
        border-bottom: "none";
        color: #fff;
    }
`
const Text = styled.span`
    font-size: 400;
    color: ${admin.dark};
    margin-left: 10px;
    font-size: ${({size}) => size ?? "1.2rem"};
    cursor: pointer;

    &:hover{
        color: ${({mouseEnter}) => mouseEnter && admin.dark+99};
    }
    &:active{
        color: ${({mouseEnter}) => mouseEnter && admin.dark};
    }
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
`
const ArrowIcon= styled(RiArrowDownSLine)`
    color: ${admin.dark}89;
    font-size: 16px;
    cursor: pointer;
    
    &:hover{
        color: ${admin.verde};
    }
    &:active{
        color: ${admin.dark}89;
    }
`

export default RightHeader