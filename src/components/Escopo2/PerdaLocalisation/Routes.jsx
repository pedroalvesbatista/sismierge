import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Table'
import Sin from './Sin'
import Sia from './Sia'
import ModelTable from '../../Table/ModelTable'

function Routes({ tables, dataOnchage }) {
    const { otherOptionSelect } = useSelector(state => state.others)

    const route= [
        'Sistema interligado Nacional(SIN)',
        'Sistema isolado do Amazonas',
        'Outros sistemas isolados'
    ]
    // console.log(otherOptionSelect);
    // console.log(route[1] === otherOptionSelect);
    // console.log(route[1]);
    // console.log(tables);
  return (
    <>
        {route[0] === otherOptionSelect &&
            <Sin dataOnchage={dataOnchage} items={tables} />
        }
        {route[1] === otherOptionSelect &&
            <Sia dataOnchage={dataOnchage} items={tables} />
        }
        {route[2] === otherOptionSelect &&
            <ModelTable 
                items={tables[0]} 
                typeInput='number'
                indexTypeInput={[3, 4]}
                dataOnchage={dataOnchage}
            />
        }
    </>
  )
}

export default Routes