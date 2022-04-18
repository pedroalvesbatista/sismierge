import React from 'react'
// import { useSelector } from 'react-redux'
import Table from '../../Table'

function Routes({ tables, onChangeData, items }) {
    // const { otherOptionSelect } = useSelector(state => state.others)

    // const route= [
    //     'Sistema interligado Nacional(SIN)',
    //     'Sistema isolado do Amazonas',
    //     'Outros sistemas isolados'
    // ]
    console.log(tables);
  return (
    <>
        <Table 
          titles={tables}
          eT= {true}
          onChangeData={onChangeData}
          itemsTable={items}
        />
    </>
  )
}

export default Routes