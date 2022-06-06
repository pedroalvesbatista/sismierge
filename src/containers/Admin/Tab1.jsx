import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { othersActions } from '../../actions'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'
import { authActions } from '../../actions'

function Tab1() {
  const dispatch = useDispatch()
    const titles= ["nome completo", "Email", "Nível", "opções", "Status"]
    const { loadingGetUsers, users, roles } = useSelector(state => state.auth)

    const handelModal = () => {
      dispatch(othersActions.handleOpenModal("loading"))
    }

    const handleEdit = () => {
      dispatch(othersActions.handleOpenModal("Editar Usuário"))
      dispatch(othersActions.setDataModal())
    }
  
    useEffect(() => {
      dispatch(authActions.loadUsers())
      // console.log(roles);
    }, [users])



  return (
    <BarTable 
      item={users} l
      loading={loadingGetUsers} 
      header={titles} 
      addButtonTop={loadingGetUsers}
      onClick={handelModal}
    />
  )
}

export default Tab1