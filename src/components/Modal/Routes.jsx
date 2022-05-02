import React from 'react'
import {
  AddMatriz,
  AddColaboradores,
  AddUnidade
} from './Company'

function Routes({ type, openModal}) {
  const modalType= ["Adicionar matriz", "Adicionar unidade", "Adicionar colaboradores"]
    const addCompany= 'Adicionar empresa'
    
  return (
    <>
      {type.toLowerCase() === modalType[0].toLowerCase()  && <AddMatriz openModal={openModal} />}
      {type.toLowerCase() === modalType[1].toLowerCase()  && <AddColaboradores openModal={openModal} />}
      {type.toLowerCase() === modalType[2].toLowerCase()  && <AddUnidade openModal={openModal} />}
    </>
  )
}

export default Routes