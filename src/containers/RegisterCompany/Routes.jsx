import React from 'react'
import { Inicio } from './Inicio'
import { Organisation } from './Organisation'
import { Unidade } from './Unidade'
import { Welcome } from './Welcome'

function Routes({ page, data, setPage }) {
    const routes= ["inicio", "organisation", "unidade", "welcome"]
  return (
    <>
      {page === routes[0] && <Inicio setPage={setPage} dataUser={data} />}
      {page === routes[1] && <Organisation setPage={setPage} dataCompany={data} />}
      {page === routes[2] && <Unidade setPage={setPage} dataCompany={data} />}
      {page === routes[3] && <Welcome setPage={setPage} dataCompany={data} />}
    </>
  )
}

export default Routes