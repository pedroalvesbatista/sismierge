import React from 'react'
// import { useSelector } from 'react-redux'
import Table from '../../Table'

function Routes({ tables }) {
    // const { otherOptionSelect } = useSelector(state => state.others)

    // const route= [
    //     'Sistema interligado Nacional(SIN)',
    //     'Sistema isolado do Amazonas',
    //     'Outros sistemas isolados'
    // ]
  return (
    <>
        <Table 
            titles={tables}
        />
    </>
  )
}

export default Routes