import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
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
import { othersActions } from '../../actions';

function Menu({ titleHome, closeMenu }) {
    const navigate= useNavigate()
    const { titlePage, isCloseMenu } = useSelector(state => state.others)
    const { id, slug } = useParams()
    const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))
    const [active, setActive] = useState(0)
    const [close, setClose] = useState(isCloseMenu)
    const dispatch= useDispatch()
    // const { titlePage } = useSelector(state => state.others)

    const handleActive= (key, item) => {
        setActive(key)
        dispatch({
            type: others.SET_TITLE_PAGE,
            payload: item.text
        })
        navigate(item.slug)
    }

    const handleLogout= () => {
        localStorage.clear()
        window.location.href = '/auth/login'
    }

    const handleClose= () => {
        setClose(!close)
    }

    useEffect(() => {
        // console.log(window.location.pathname);
        if (window.location.pathname === `/start/${id}/${slug}`) {
            dispatch(othersActions.handleCloseMenu(!close))
            // console.log("Yes");
            // setClose(true)
        }else {
            dispatch(othersActions.handleCloseMenu(close))
        }
        // closeMenu(close)
        
    }, [close, isCloseMenu, slug, id])
    

    

  return (
    <Area closed={isCloseMenu}>
        <Header closed={isCloseMenu}>
            <Logo onClick={() => navigate("/")} closed={isCloseMenu}/>
            <Close onClick={handleClose}  />
        </Header>
        <MenuArea closed={isCloseMenu}>
            {menu.map((item, key) => (
                <AreaItem key={key} onClick={() => handleActive(key, item)}  active={titlePage === item.text}>
                    {/* <RiDashboardLine size={20} color={active === key ? primary.verde : primary.dark} /> */}
                    {IconComponent({ 
                        icon: item.component, 
                        size: titlePage === item.text ? "1.2em"  : "1em", 
                        color: titlePage === item.text ? primary.verde : primary.dark+99,
                        style: {transition: "all .2s ease-out"}
                    })}
                    {!isCloseMenu && <Text active={titlePage === item.text}> {item.text} </Text>}
                </AreaItem>
            ))}
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <AreaItem active={true}>
                    <RiLogoutBoxLine 
                        size= {18} 
                        color= {primary.verde}
                        style= {{transition: "all .2s ease-out"}} 
                    />
                    {!isCloseMenu && <Text active={true} onClick={handleLogout} weight='500' hover='true' color='true'>Sair</Text>}
                </AreaItem>
            </div>
        </MenuArea>
        <BottomArea closed={isCloseMenu}>
            {/* <Img closed={isCloseMenu} src='/profile.png'/> */}
            <Avatar bgColor radius name={storage?.name} />
            {!isCloseMenu && <Subtext closed={isCloseMenu} weight='bold'>
                { storage ? storage?.name ?? storage.username : "Nome do usuario" }
            </Subtext>}
        </BottomArea>
    </Area>
  )
}

export default Menu