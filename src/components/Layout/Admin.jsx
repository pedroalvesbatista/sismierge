import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'
import Menu from '../Menu'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import { contabilizarActions } from '../../actions'

export function AdminLayout({ children }) {
    // const { titlePage } = useSelector(state => state.others)
    const [title, setTitle] = useState('')
    const dispatch= useDispatch()
    const storage= JSON.parse(localStorage.getItem("@sismiegee/data:contabilizar"))

    // const handleActive= (key, title) => {
    //     // setActive(key)
    //     dispatch({
    //         type: others.SET_HOMETITLE,
    //         payload: title
    //     })
    // }

    useEffect(() => {
      dispatch(contabilizarActions.loadData())
    }, [storage])
    
    
    return (
        <Area>
            <Menu titleHome={e => setTitle(e)} />
            <div style={{flex: 6, marginLeft: '10%' , padding: 0}}>
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