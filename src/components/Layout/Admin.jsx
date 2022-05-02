import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'
import Menu from '../Menu'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import { contabilizarActions, othersActions } from '../../actions'
import { escopo } from '../../constants/app'

export function AdminLayout({ children }) {
    const dispatch = useDispatch()
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
            <Wrapper closeMenu={closeMenu}>
                <Header co2={co2} co2t={co2t} title={title} />
                <Container>
                    {children}
                    <Aside />
                </Container>
            </Wrapper>
        </Area>
    )
}


const Area= styled.div`
    /* background-color: #f8f9fc5b; */
    display: flex;
    position: relative;
`
const Wrapper= styled.div`
    /* background-color: #f8f9fc5b; */
    display: flex;
    flex: 6;
    position: relative;
    flex-direction: column;
    margin-left: ${({closeMenu}) => closeMenu ? '3.2%' : '15%'};
`
const Container= styled.div`
    display: flex;
    padding: 20px;
    position: relative;
`
const Aside= styled.div`
    /* background-color: #f8f9fc5b; */
    display: flex;
    position: relative;
    flex: 2;
`