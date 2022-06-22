import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../actions'

function Tab4({ openModal }) {
  const dispatch = useDispatch()
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getColaboradors = () => {
    setLoading(true)
    colaboradorService.getColaboradors()
        .then(res => {
            setLoading(false)
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
  }

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar colaboradores"))
  }

  // useEffect(() => {
  //   getColaboradors()
  // }, [])

  return (
    <BarTable 
      title='colaboradores' 
      tab={4} 
      onClick={handelModal} 
      item={data} 
      loading={false} 
      header={titles} 
    />
  )
}

export default Tab4