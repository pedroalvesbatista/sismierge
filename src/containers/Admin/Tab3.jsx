import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../actions'

function Tab3() {
  const dispatch = useDispatch()
  const { loadingGetUsers, users } = useSelector(state => state.auth)
  const titles= ["nome completo", "Email", "Nível", "opções", "Status"]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar colaborador"))
  }

  return (
    <BarTable 
      title='colaboradores' 
      item={users?.filter(i => i.type === "colaborador")} 
      loading={false} 
      header={titles} 
      onClick={handelModal}
      onEdit={() => dispatch(othersActions.handleOpenModal("Editar Usuário"))}
    />
  )
}

export default Tab3