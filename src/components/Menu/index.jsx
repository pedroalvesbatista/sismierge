import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RiLogoutBoxLine } from 'react-icons/ri';

import { IconComponent } from '../CreateComponent'
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
    Subtext,
    AreaItem,
    Close
} from './styles'
import { primary } from '../../constants/tailwind/colors';
import Avatar from '../Avatar';

function Menu({ titleHome, closeMenu }) {
    const navigate= useNavigate()
    const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))
    const [active, setActive] = useState(0)
    const [close, setClose] = useState(false)
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

    const handleClose= () => {
        setClose(!close)
        console.log(close);
    }

    useEffect(() => {
        closeMenu(close)
    }, [close])
    

    

  return (
    <Area closed={close}>
        <Header closed={close}>
            <Logo onClick={() => navigate("/")} closed={close}/>
            <Close onClick={handleClose}  />
        </Header>
        <MenuArea closed={close}>
            {menu.map((item, key) => (
                <AreaItem key={key} onClick={() => handleActive(key, item)}  active={active === key ? true : false}>
                    {/* <RiDashboardLine size={20} color={active === key ? primary.verde : primary.dark} /> */}
                    {IconComponent({ 
                        icon: item.component, 
                        size: active === key ? "1.2em"  : "1em", 
                        color: active === key ? primary.verde : primary.dark+99,
                        style: {transition: "all .2s ease-out"}
                    })}
                    {!close && <Text active={active === key ? true : false}> {item.text} </Text>}
                </AreaItem>
            ))}
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <AreaItem active={true}>
                    <RiLogoutBoxLine 
                        size= {18} 
                        color= {primary.verde}
                        style= {{transition: "all .2s ease-out"}} 
                    />
                    {!close && <Text active={true} onClick={handleLogout} weight='500' hover='true' color='true'>Sair</Text>}
                </AreaItem>
            </div>
        </MenuArea>
        <BottomArea closed={close}>
            {/* <Img closed={close} src='/profile.png'/> */}
            <Avatar bgColor radius name={storage.name} />
            {!close && <Subtext closed={close} weight='bold'>
                { storage ? storage.name ?? storage.username : "Nome do usuario" }
            </Subtext>}
        </BottomArea>
    </Area>
  )
}

export default Menu