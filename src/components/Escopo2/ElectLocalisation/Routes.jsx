import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Table'
import ModelTable from '../../Table/ModelTable'
import Sin from './Sin'
import Sia from './Sia'

function Routes({ tables, items, dataOnchage }) {
    const { optionSelect, otherOptionSelect } = useSelector(state => state.others)

    const route= [
        'Vou incluir os consumos de energia elétrica mensalmente',
        'Vou incluir os consumos de energia elétrica mensalmente',
        'Quero anexar minha fatura de energia elétrica para que sejam extraídas todas as informações necessárias do documento',
        'Vou relatar o consumo de energia elétrica em MWh ou KWh'
    ]
    const route2= [
        'Sistema Interligado Nacional (SIN)',
        'Sistema Isolado do Amazonas',
        'Outros sistemas isolados'
    ]

    // console.log(tables);

  return (
    <>
        {route[0] === optionSelect && route2[0] === otherOptionSelect &&
            <Sin items={tables} dataOnchage={e => dataOnchage(e)} />
            // <ModelTable 
            //     items={items.name.table} 
            //     typeInput='number'
            //     indexTypeInput={[1, 4]}
            // />
        }
        {route[0] === optionSelect && route2[1] === otherOptionSelect &&
            <Sia items={tables} dataOnchage={e => dataOnchage(e)}/>
        }
        {route[0] === optionSelect && route2[2] === otherOptionSelect &&
            <ModelTable 
                items={tables[0]} 
                typeInput='number'
                indexTypeInput={[3, 4]}
                dataOnchage={e => dataOnchage(e)}
            />
        }
    </>
  )
}

export default Routes