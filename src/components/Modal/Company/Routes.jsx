import React from 'react'
import { useSelector } from 'react-redux'
import {
  AddMatriz,
  AddColaboradores,
  AddUnidade,
  AddFilial,
  AddInventariacao,
  ChooseEscopo,
  AddUser
} from '.'
import { Inicio } from '../../../containers/RegisterCompany/Inicio'
import { Inventariacao } from '../../../containers/RegisterCompany/Inventariacao'
import { Organisation } from '../../../containers/RegisterCompany/Organisation'
import { OrganisationStep2 } from '../../../containers/RegisterCompany/OrganisationStep2'
import { Unidade } from '../../../containers/RegisterCompany/Unidade'
import { EditeOrganisation } from './EditeOrganisation'

function Routes({ type, openModal}) {
  const { displayModal } = useSelector(state => state.others)
  const modalType= [
    "Adicionar matriz", "Adicionar unidades", "Adicionar colaboradores", "Adicionar filial", "Formulário de Inventariação", "Escolha os Escopos", "Adicionar usuarios", "inicio", "organisation", "organisationStep2", "unidade", "Inventariação", "Editar minha organização"
  ]
    
  return (
    < >
      {displayModal === modalType[0].toLowerCase()  && <AddMatriz openModal={openModal} />}
      {displayModal === modalType[1].toLowerCase()  && <AddUnidade openModal={openModal} />}
      {displayModal === modalType[2].toLowerCase()  && <AddColaboradores openModal={openModal} />}
      {displayModal === modalType[3].toLowerCase()  && <AddFilial openModal={openModal} />}
      {displayModal === modalType[4].toLowerCase()  && <AddInventariacao openModal={openModal} />}
      {displayModal === modalType[5].toLowerCase()  && <ChooseEscopo openModal={openModal} />}
      {displayModal === modalType[6].toLowerCase()  && <AddUser openModal={openModal} />}
      {displayModal === modalType[7].toLowerCase() && <Inicio openModal={openModal} />}
      {displayModal === modalType[8].toLowerCase() && <Organisation openModal={openModal} />}
      {displayModal === modalType[9].toLowerCase() && <OrganisationStep2 openModal={openModal} />}
      {displayModal === modalType[10].toLowerCase() && <Unidade openModal={openModal} />}
      {displayModal === modalType[11].toLowerCase() && <Inventariacao openModal={openModal} />}
      {displayModal === modalType[12].toLowerCase() && <EditeOrganisation openModal={openModal} />}
    </>
  )
}

export default Routes