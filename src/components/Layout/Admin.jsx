import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { primary } from '../../constants/tailwind/colors'
import Menu from '../Menu'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { contabilizarActions, othersActions } from '../../actions'
import { escopo, menu } from '../../constants/app'
import { useParams } from 'react-router-dom'

export function AdminLayout({ children }) {
    const dispatch = useDispatch()
    const { isCloseMenu } = useSelector(state => state.others)
    // const [closeMenu, setCloseMenu] = useState(false)

    const { id } = useParams()

    const pathname= window.location.pathname

    useEffect(() => {
        const filterData = menu.filter(i => i.slug === pathname)[0]
        dispatch(othersActions.changePageTitle(filterData?.text))

        switch (id) {
            case "1":
              return dispatch(othersActions.changePageTitle("Escopo "+ id))
      
            case "2":
              return dispatch(othersActions.changePageTitle("Escopo "+ id))
      
            case "3":
              return dispatch(othersActions.changePageTitle("Escopo "+ id))
          
            default:
              return dispatch(othersActions.changePageTitle("Sismierge"))
          }
        // console.log(pathname);
    }, [pathname])
    
    
    return (
        <Area>
            <Menu/>
            <Wrapper closeMenu={isCloseMenu}>
                <Header />
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