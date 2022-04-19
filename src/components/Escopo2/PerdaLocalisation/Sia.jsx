import React from 'react'
import Table from '../../Table'
import ModelTable from '../../Table/ModelTable'

function Sia({ tables, items, dataOnchage }) {
    const rf= ['Registro da fonte']
    const df= ['Descrição da fonte']
    const cal= ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const cae= ['Compra anual de elétricidade(MWh)']
    const etc= ['Elétricidade total comprada(MWh)']
    const eaco2= ['Emissões anuais de CO2(t)']
    const etco2= ['Emissões totais de CO2(t)']
    const ech= ['Emissões CH4(t)']
    const en2o= ['Emissões N2O(t)']

    return (
        <div>
            <Table 
                titles={cal}
                titleArea={true}
                titleAreaContent='Relate aqui a compra mensal de elétricidade(MWh)'
            />
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                <ModelTable 
                    items={items?.slice(0, 6)}
                    dataOnchage={dataOnchage}
                />
            </div>
            <Table 
                titles={cal}
                titleArea={true}
                titleAreaContent='Emissões mensais de CO2(t)'
            />
        </div>
    )
}

export default Sia