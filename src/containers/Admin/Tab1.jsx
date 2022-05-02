import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { othersActions } from '../../actions'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'

function Tab1() {
  const dispatch = useDispatch()
    const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = () => {
      setLoading(true)
      authService.loadUsers()
          .then(res => {
              setLoading(false)
              setUsers(res.data)
          })
          .catch(err => {
              setLoading(false)
              console.log(err.response.data.error);
          })
    }

    const handelModal = () => {
      dispatch(othersActions.handleOpenModal("Adicionar empresa"))
    }
  
    // useEffect(() => {
    //   getUsers()
    // }, [])

    // console.log(users);

  return (
    <BarTable 
      item={users} l
      oading={false} 
      header={titles} 
      addButtonTop={false}
      onClick={handelModal}
    />
  )
}

export default Tab1