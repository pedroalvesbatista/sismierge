import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { companyService } from '../../services'
import { othersActions, companyActions, authActions } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

function Tab2({ openModal }) {
  const dispatch = useDispatch()
  const { companies } = useSelector(state => state.company)
  const { loadingGetUsers, users } = useSelector(state => state.auth)
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  // useEffect(() => {
  //   dispatch(companyActions.getUserCompany())
  // }, [companies])

  // console.log(users);
  

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar empresa"))
  }
    
  return (
    <BarTable 
      onClick={handelModal} 
      item={users?.filter(i => i.type === "master")} 
      loading={false} 
      header={titles} 
    />
  )
}

export default Tab2