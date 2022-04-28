import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RiDashboardLine } from 'react-icons/ri';
import { primary, second, admin } from '../../../constants/tailwind/colors'
import { 
    Area,
    Header,
    Logo,
    MenuArea,
    Text,
    AreaItem,
    BottomArea,
    Img,
    Subtext
} from './styles'

function MenuAdmin({ titleHome }) {
    const navigate= useNavigate()
    const [active, setActive] = useState(true)
    const dispatch= useDispatch()
    // const { titlePage } = useSelector(state => state.others)

    const handleActive= (key, item) => {
        setActive(true)
        // titleHome(item.text)
    }

    const handleLogout= () => {
        localStorage.clear()
        navigate('/auth/admin/login')
    }

  return (
    <Area>
        <Header>
            <Logo />
        </Header>
        <MenuArea>
            <AreaItem onClick={() => handleActive()}  active={active}>
                <RiDashboardLine size={20} color={active ? primary.verde : primary.dark} />
                <Text active={active}> Dashboard </Text>
            </AreaItem>
        </MenuArea>
        <BottomArea>
            <Img src='/profile.png'/>
            <Subtext weight='bold'>Juliana Ferreira</Subtext>
            <Subtext onClick={handleLogout} weight='500' hover='true' color='true'>Sair</Subtext>
        </BottomArea>
    </Area>
  )
}

export default MenuAdmin