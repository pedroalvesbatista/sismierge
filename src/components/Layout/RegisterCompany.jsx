import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { admin } from '../../constants/tailwind/colors'
import MenuAdmin from '../Menu/Admin'
import HeaderAdmin from '../Header/Admin'

export function RegisterCompanyLayout({ children }) {
    const [title, setTitle] = useState('')
    
    
    return (
        <Area>
            {children}
        </Area>
    )
}


const Area= styled.div`
    background-color: ${admin.verde}47;
`