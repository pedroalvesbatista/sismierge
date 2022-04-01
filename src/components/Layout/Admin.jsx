import React, { useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'
import Menu from '../Menu'
import Header from '../Header'
// import { useDispatch, useSelector } from 'react-redux'
// import { others } from '../../constants/redux'

export function AdminLayout({ children }) {
    // const { titlePage } = useSelector(state => state.others)
    const [title, setTitle] = useState('')
    // const dispatch= useDispatch()

    // const handleActive= (key, title) => {
    //     // setActive(key)
    //     dispatch({
    //         type: others.SET_HOMETITLE,
    //         payload: title
    //     })
    // }
    
    return (
        <Area>
            <Menu titleHome={e => setTitle(e)} />
            <div style={{flex: 6, padding: 50}}>
                <Header title={title} />
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