import React from 'react'
// import { useSelector } from 'react-redux'
import Table from '../../Table'
import ModelTable from '../../Table/ModelTable';

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
      {/* <Table 
        titles={tables[1]}
        eT= {true}
        onChangeData={onChangeData}
        itemsTable={items}
      /> */}
      <ModelTable 
        items={tables[1]} 
        typeInput='number'
        indexTypeInput={[3, 4]}
        dataOnchage={onChangeData}
        // key={index}
    />
      <Table 
        titles={tables[0]}
        eT= {true}
        onChangeData={onChangeData}
        itemsTable={items}
      />
    </>
  )
}

export default Routes