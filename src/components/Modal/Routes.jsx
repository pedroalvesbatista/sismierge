import React from 'react'
import {
    AddCompany
} from './Admin'

function Routes({ type, openModal}) {
    const addCompany= 'Adicionar empresa'
    
  return (
    <>
        {type.toLowerCase() === addCompany.toLowerCase()  && <AddCompany openModal={openModal} />}
    </>
  )
}

export default Routes