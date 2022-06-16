import React, { useEffect } from 'react'
import BarTable from '../../components/Admin/BarTable'
import { useDispatch, useSelector } from 'react-redux'
import { authActions, othersActions } from '../../actions'

function Tab3() {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.auth)
  const titles= ["nome completo", "Email", "Nível", "opções", "Status"]

  useEffect(() => {
    dispatch(authActions.loadUsers())
  }, [users])
  

  const handelModal = () => {
    dispatch(othersActions.handleOpenModal("Adicionar colaborador"))
  }

  return (
    <BarTable 
      title='colaboradores' 
      item={users?.filter(i => i.role.type === "authenticated")} 
      loading={false} 
      header={titles} 
      onClick={handelModal}
      onEdit={() => dispatch(othersActions.handleOpenModal("Editar Usuário"))}
    />
  )
}

export default Tab3