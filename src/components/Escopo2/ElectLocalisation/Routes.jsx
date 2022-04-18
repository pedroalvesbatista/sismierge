import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Table'
import Sin from './Sin'
import Sia from './Sia'

function Routes({ tables, items }) {
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
    // console.log(otherOptionSelect);
    // console.log(optionSelect);
  return (
    <>
        {route[0] === optionSelect && route2[0] === otherOptionSelect &&
            <Sin />
        }
        {route[0] === optionSelect && route2[1] === otherOptionSelect &&
            <Sia />
        }
        {route[0] === optionSelect && route2[2] === otherOptionSelect &&
            <Table 
                titles={tables}
            />
        }
    </>
  )
}

export default Routes