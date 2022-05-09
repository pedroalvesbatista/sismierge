import React from 'react'
import { Inicio } from './Inicio'
import { Organisation } from './Organisation'
import { OrganisationStep2 } from './OrganisationStep2'
import { Unidade } from './Unidade'
import { Welcome } from './Welcome'

function Routes({ page, data, setPage }) {
    const routes= ["inicio", "organisation", "organisationStep2", "unidade", "welcome"]
  return (
    <>
      {page === routes[0] && <Inicio setPage={setPage} dataUser={data} />}
      {page === routes[1] && <Organisation setPage={setPage} dataCompany={data} />}
      {page === routes[2] && <OrganisationStep2 setPage={setPage} dataCompany={data} />}
      {page === routes[3] && <Unidade setPage={setPage} dataCompany={data} />}
      {page === routes[4] && <Welcome setPage={setPage} dataCompany={data} />}
    </>
  )
}

export default Routes