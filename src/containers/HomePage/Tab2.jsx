import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { companyService } from '../../services'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../actions'

function Tab2({ openModal }) {
  const dispatch = useDispatch()
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar matriz"))
  }

  const getCompanies = () => {
    setLoading(true)
    companyService.getUserCompany()
        .then(res => {
            setLoading(false)
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
  }

  useEffect(() => {
    getCompanies()
  }, [openModal])
    
  return (
    <BarTable 
      onClick={handelModal} 
      title='matriz' 
      tab="2" item={data} 
      loading={false} 
      header={titles} 
    />
  )
}

export default Tab2