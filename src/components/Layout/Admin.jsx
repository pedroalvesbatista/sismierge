import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'
import Menu from '../Menu'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import { contabilizarActions } from '../../actions'
import { escopo } from '../../constants/app'

export function AdminLayout({ children }) {
    const [title, setTitle] = useState('')
    const [closeMenu, setCloseMenu] = useState(false)

    // const handleActive= (key, title) => {
    //     // setActive(key)
    //     dispatch({
    //         type: others.SET_HOMETITLE,
    //         payload: title
    //     })
    // }

    const storage1= JSON.parse(localStorage.getItem("@sismiegee/dash:co2"))
    const storage2= JSON.parse(localStorage.getItem("@sismiegee/dash:co2t"))
    const [co2, setCo2] = useState(storage1)
    const [co2t, setCo2t] = useState(storage2)

    useEffect(() => {
        setCo2(storage1)
        setCo2t(storage2)
    }, [storage1, storage2, co2, co2t])

    
    
    return (
        <Area>
            <Menu closeMenu={e => setCloseMenu(e)} titleHome={e => setTitle(e)} />
            <div style={{flex: 6, marginLeft: closeMenu ? '3.2%' : '15%' , padding: 0}}>
                <Header co2={co2} co2t={co2t} title={title} />
                {children}
            </div>
        </Area>
    )
}


const Area= styled.div`
    background-color: ${primary.cinza};
    display: flex;
    position: relative;
`