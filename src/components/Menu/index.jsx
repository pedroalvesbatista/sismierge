import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { menu } from '../../constants/app'
import { others } from '../../constants/redux'
import { 
    Area,
    Header,
    Logo,
    MenuArea,
    Text,
    Notif,
    BarActive,
    BottomArea,
    Img,
    Subtext
} from './styles'

function Menu({ titleHome }) {
    const navigate= useNavigate()
    const [active, setActive] = useState(0)
    const dispatch= useDispatch()
    // const { titlePage } = useSelector(state => state.others)

    const handleActive= (key, title) => {
        setActive(key)
        titleHome(title)
        dispatch({
            type: others.SET_HOMETITLE,
            payload: title
        })
    }

    const handleLogout= () => {
        localStorage.clear()
        navigate('/auth/login')
    }

  return (
    <Area>
        <Header>
            <Logo />
        </Header>
        <MenuArea>
            {menu.map((item, key) => (
                <div key={key} style={{position: 'relative'}}>
                    <Text onClick={() => handleActive(key, item)}  active={active === key ? true : false}> {item} </Text>
                    {active === key && <BarActive/>}
                    {item === 'Mensagens' && <Notif>20</Notif>}
                    {item === 'Notificações' && <Notif>10</Notif>}
                </div>
            ))}
        </MenuArea>
        <BottomArea>
            <Img src='/profile.jpg'/>
            <Subtext weight='bold'>Christian Santos</Subtext>
            <Subtext onClick={handleLogout} weight='500' hover='true' color='true'>Sair</Subtext>
        </BottomArea>
    </Area>
  )
}

export default Menu