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

function Modal({ titleHome }) {
    const navigate= useNavigate()
    const [active, setActive] = useState(0)
    const dispatch= useDispatch()
    // const { titlePage } = useSelector(state => state.others)

    const handleActive= (key, item) => {
        setActive(key)
        titleHome(item.text)
        dispatch({
            type: others.SET_HOMETITLE,
            payload: item.text
        })
        navigate(item.slug)
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
                    <Text onClick={() => handleActive(key, item)}  active={active === key ? true : false}> {item.text} </Text>
                    {active === key && <BarActive/>}
                    {item.text === 'Mensagens' && <Notif>20</Notif>}
                    {item.text === 'Notificações' && <Notif>10</Notif>}
                </div>
            ))}
        </MenuArea>
        <BottomArea>
            <Img src='/profile.png'/>
            <Subtext weight='bold'>Juliana Ferreira</Subtext>
            <Subtext onClick={handleLogout} weight='500' hover='true' color='true'>Sair</Subtext>
        </BottomArea>
    </Area>
  )
}

export default MOdal