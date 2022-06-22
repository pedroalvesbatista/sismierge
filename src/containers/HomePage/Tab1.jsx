import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'
import { othersActions } from '../../actions'

function Tab1({ openModal }) {
    const dispatch = useDispatch()
    const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const { isOpenModal } = useSelector(state => state.others)

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
  
    // useEffect(() => {
    //   getUsers()
    // }, [])

    const handelModal = () => {
      dispatch(othersActions.handleOpenModal("Adicionar matriz"))
    }

    // console.log(users);

  return (
    <BarTable 
      tab={1} 
      onClick={handelModal} 
      title='matriz' 
      item={users} 
      loading={false} 
      // header={titles} 
      addButtonTop={false}
      type="escopo"
    />
  )
}

export default Tab1