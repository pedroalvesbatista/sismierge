import React from 'react'
import { useSelector } from 'react-redux'
import {
  AddMatriz,
  AddColaboradores,
  AddUnidade,
  AddFilial,
  AddInventariacao
} from '.'

function Routes({ type, openModal}) {
  const { displayModal } = useSelector(state => state.others)
  const modalType= ["Adicionar matriz", "Adicionar unidades", "Adicionar colaboradores", "Adicionar filial", "Formulário de Inventariação"]
    
  return (
    <div >
      {displayModal === modalType[0].toLowerCase()  && <AddMatriz openModal={openModal} />}
      {displayModal === modalType[1].toLowerCase()  && <AddUnidade openModal={openModal} />}
      {displayModal === modalType[2].toLowerCase()  && <AddColaboradores openModal={openModal} />}
      {displayModal === modalType[3].toLowerCase()  && <AddFilial openModal={openModal} />}
      {displayModal === modalType[4].toLowerCase()  && <AddInventariacao openModal={openModal} />}
    </div>
  )
}

export default Routes