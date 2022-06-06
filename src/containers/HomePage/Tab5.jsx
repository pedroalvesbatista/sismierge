import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../actions'

function Tab5({ openModal }) {
  const dispatch = useDispatch()
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getColaboradors = (type) => {
    setLoading(true)
    colaboradorService.getColaboradors(type ?? "colaborador")
        .then(res => {
            setLoading(false)
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
  }

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar usuarios"))
  }

  useEffect(() => {
    getColaboradors()
  }, [])

  return (
    <BarTable 
      title='usuarios' 
      tab={4} 
      onClick={handelModal} 
      item={data} 
      loading={false} 
      header={titles} 
    />
  )
}

export default Tab5