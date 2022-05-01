import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { admin } from '../../constants/tailwind/colors'
import MenuAdmin from '../Menu/Admin'
import HeaderAdmin from '../Header/Admin'
import { useDispatch } from 'react-redux'
import { contabilizarActions } from '../../actions'
import { escopo } from '../../constants/app'

export function SismiergeLayout({ children }) {
    const [title, setTitle] = useState('')
    
    
    return (
        <Area>
            <MenuAdmin titleHome={e => console.log(e)} />
            <Center >
                <HeaderAdmin />
                {children}
            </Center>
        </Area>
    )
}


const Area= styled.div`
    /* background-color: ${admin.cinza}; */
    display: flex;
    position: relative;
`
const Center= styled.div`
    flex: 6;
    margin-left: 10%;
    padding: 0px 10%;
`