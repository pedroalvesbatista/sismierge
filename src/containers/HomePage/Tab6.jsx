import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../actions'

function Tab6({ openModal }) {
  const dispatch = useDispatch()
  const titles= ["Ano", "Motivo ", "Descrição", "Status"]
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
    dispatch(othersActions.handleOpenModal("Adicionar Inventariação"))
  }

  useEffect(() => {
    getColaboradors()
  }, [])

  return (
    <BarTable 
      title='Inventariação' 
      tab={4} 
      onClick={handelModal} 
    //   item={data} 
      loading={false} 
      header={titles} 
    />
  )
}

export default Tab6