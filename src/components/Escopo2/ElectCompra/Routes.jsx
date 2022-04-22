import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Table'
import ModelTable from '../../Table/ModelTable'

function Routes({ tables, dataOnchage }) {
    const { optionSelect, otherOptionSelect } = useSelector(state => state.others)
    const cal= ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const route= [
        'Contrato de comercializacão de energia',
        'Certificado de energia renovável - REC'
    ]
    const route2= [
        'Abordagem baseada em escolha de compra',
        'cálculo de energia não rastreada'
    ]
    const ver1= route.filter(i => i === optionSelect).length > 0
    const ver2= route2.filter(i => i === otherOptionSelect).length > 0
    // console.log(otherOptionSelect);
    // console.log(route[1] === otherOptionSelect);
    // console.log(route[1]);
    // console.log(tables);
  return (
    <>
        {ver1 && ver2 &&
            <>
                <Table 
                    titles={cal}
                    titleArea={true}
                    titleAreaContent='Relate aqui a compra mensal de elétricidade(MWh)'
                />
                {tables?.map((item, index) => (
                    <>
                        {index == 1 ?
                            <Table 
                                titles={item}
                                eT= {true}
                                onChangeData={dataOnchage}
                            />
                        :
                            <ModelTable 
                                items={item} 
                                typeInput='number'
                                indexTypeInput={[3, 4]}
                                dataOnchage={dataOnchage}
                                key={index}
                            />
                        }
                    </>
                    
                ))}
            </>
        }
    </>
  )
}

export default Routes