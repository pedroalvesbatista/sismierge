import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useDispatch, useSelector } from 'react-redux'
import { companyActions, othersActions } from '../../actions'
import { companyConstants } from '../../constants/redux'

function Tab6({ openModal }) {
  const dispatch = useDispatch()
  const { inventories, loadingInventory, sucessInventory, companies, sucessCompany } = useSelector(state => state.company)
  const titles= ["Ano", "Motivo ", "Produção total do ano", "Opções"]

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar Inventariação"))
  }

  useEffect(() => {
    // console.log(inventories.length > 0 ? "Yes" : "nop");
  }, [companies])
  
  useEffect(() => {
    dispatch(companyActions.loadInventories(companies?.id))
  }, [])
  

  return (
    <BarTable 
      title='Inventariação' 
      // tab={4} 
      onClick={handelModal} 
      item={inventories} 
      loading={loadingInventory} 
      header={titles} 
    />
  )
}

export default Tab6