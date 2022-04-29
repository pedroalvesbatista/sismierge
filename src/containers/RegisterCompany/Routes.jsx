import React from 'react'
import { Inicio } from './Inicio'
import { Organisation } from './Organisation'
import { Unidade } from './Unidade'

function Routes({ page, data, setPage }) {
    // console.log(data);
  return (
    <>
        {page === 1 && <Inicio setPage={setPage} dataUser={data} />}
        {page === 2 && <Organisation setPage={setPage} dataCompany={data} />}
        {page === 3 && <Unidade setPage={setPage} dataCompany={data} />}
    </>
  )
}

export default Routes