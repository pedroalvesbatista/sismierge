import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'
import { companyActions, othersActions } from '../../actions'

function TabMinhaEmpresa({ openModal }) {
    const dispatch = useDispatch()
    const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const { isOpenModal } = useSelector(state => state.others)
    const { companies, sucessCompany } = useSelector(state => state.company)
  
    useEffect(() => {
        dispatch(companyActions.getCompanies())
    }, [])

    const handelModal = () => {
      dispatch(othersActions.handleOpenModal("Editar minha organização"))
    }

    // console.log(users);

  return (
    <BarTable 
        route
        onClick={handelModal} 
        title='Editar minha organização' 
        item={companies} 
        loading={false} 
        // header={titles} 
        // addButtonTop={false}
        type="empresa"
    />
  )
}

export default TabMinhaEmpresa