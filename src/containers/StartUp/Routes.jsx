import React from 'react'
import { Inventariacao } from '../RegisterCompany/Inventariacao'
import { Organisation } from '../RegisterCompany/Organisation'
import { OrganisationStep2 } from '../RegisterCompany/OrganisationStep2'
import { Unidade } from '../RegisterCompany/Unidade'

function Routes({ page, data, setPage }) {
    const routes= ["organisation", "organisationStep2", "unidade", "inventariacao"]
  return (
    <>
      {page === routes[0] && <Organisation skip={true} setPage={setPage} dataUser={data} />}
      {page === routes[1] && <OrganisationStep2 skip={true} setPage={setPage} dataCompany={data} />}
      {page === routes[2] && <Unidade skip={true} setPage={setPage} dataCompany={data} />}
      {page === routes[3] && <Inventariacao skip={true} setPage={setPage} dataCompany={data} />}
    </>
  )
}

export default Routes