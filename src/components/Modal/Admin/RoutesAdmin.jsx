import React from 'react'
import { useSelector } from 'react-redux'
import { AddCompany, EditUser, AddColaboradores } from '.'
import { LoadingAnimation } from '../../lottie'
import { AddInventariacao } from '../Company'

function RoutesAdmin({ type, openModal}) {
  const { displayModal } = useSelector(state => state.others)
  const modalType= ["Adicionar empresa", "Adicionar colaborador", "Editar Usuário", "Adicionar Inventariação"]
    
  return (
    <>
      {displayModal === modalType[0].toLowerCase()  && <AddCompany />}
      
      {displayModal === modalType[1].toLowerCase()  && <AddColaboradores />}

      {displayModal === modalType[2].toLowerCase()  && <EditUser />}

      {displayModal === modalType[3].toLowerCase()  && 
        <div style={{height: 600, overflowY: "auto"}}>
          <AddInventariacao />
        </div>
      }
    </>
  )
}

export default RoutesAdmin