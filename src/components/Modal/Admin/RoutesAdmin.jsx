import React from 'react'
import { useSelector } from 'react-redux'
import { AddCompany, EditUser, AddColaboradores } from '.'

function RoutesAdmin({ type, openModal}) {
  const { displayModal } = useSelector(state => state.others)
  const modalType= ["Adicionar empresa", "Adicionar colaborador", "Editar Usuário"]
    
  return (
    <>
      {displayModal === modalType[0].toLowerCase()  && <AddCompany />}
      {displayModal === modalType[1].toLowerCase()  && <AddColaboradores />}
      {displayModal === modalType[2].toLowerCase()  && <EditUser />}
    </>
  )
}

export default RoutesAdmin