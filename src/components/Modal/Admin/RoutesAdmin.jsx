import React from 'react'
import { useSelector } from 'react-redux'
import { AddCompany } from '.'

function RoutesAdmin({ type, openModal}) {
  const { displayModal } = useSelector(state => state.others)
  const modalType= ["Adicionar empresa", "Adicionar colaboradores"]
    
  return (
    <>
      {displayModal === modalType[0].toLowerCase()  && <AddCompany />}
      {/* {displayModal === modalType[2].toLowerCase()  && <AddColaboradores openModal={openModal} />} */}
    </>
  )
}

export default RoutesAdmin