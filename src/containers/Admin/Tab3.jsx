import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'

function Tab3() {
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

  useEffect(() => {
    getColaboradors()
  }, [])

  return (
    <BarTable title='colaboradores' item={data} loading={false} header={titles} />
  )
}

export default Tab3