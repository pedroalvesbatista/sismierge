import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { admin } from '../../constants/tailwind/colors'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { colaboradorService } from '../../services'
import { useSelector } from 'react-redux'

function Tab3() {
  const { loadingGetUsers, users } = useSelector(state => state.auth)
  const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  


  return (
    <BarTable title='colaboradores' item={users?.filter(i => i.type === "colaborador")} loading={false} header={titles} />
  )
}

export default Tab3