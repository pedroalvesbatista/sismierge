import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Table'
import Sin from './Sin'
import Sia from './Sia'

function Routes({ tables }) {
    const { otherOptionSelect } = useSelector(state => state.others)

    const route= [
        'Sistema interligado Nacional(SIN)',
        'Sistema isolado do Amazonas',
        'Outros sistemas isolados'
    ]
    console.log(otherOptionSelect);
    console.log(route[1] === otherOptionSelect);
    console.log(route[1]);
  return (
    <>
        {route[0] === otherOptionSelect &&
            <Sin items={tables} />
        }
        {route[1] === otherOptionSelect &&
            <Sia items={tables} />
        }
        {route[2] === otherOptionSelect &&
            <Table 
                titles={tables}
            />
        }
    </>
  )
}

export default Routes