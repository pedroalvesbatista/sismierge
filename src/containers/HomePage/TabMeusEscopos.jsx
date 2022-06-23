import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'
import { othersActions } from '../../actions'

function TabMeusEscopos({ openModal }) {
    const dispatch = useDispatch()
    const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const { isOpenModal } = useSelector(state => state.others)

    const handelModal = () => {
      dispatch(othersActions.handleOpenModal("organisation"))
    }

    // console.log(users);

  return (
    <BarTable 
      route
      onClick={handelModal} 
      title='escopo' 
      // item={users} 
      loading={false} 
      // header={titles} 
      addButtonTop={false}
      type="escopo"
    />
  )
}

export default TabMeusEscopos