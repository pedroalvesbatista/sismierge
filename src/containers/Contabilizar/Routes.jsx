import React from 'react'
import ElecLocalisation from '../../components/Escopo2/ElectLocalisation'
import PerdaLocalisation from '../../components/Escopo2/PerdaLocalisation'
import EnergiaTermica from '../../components/Escopo2/EnergiaTermica'
import ElecCompra from '../../components/Escopo2/ElectCompra'
import PerdaCompra from '../../components/Escopo2/PerdaCompra'

function Routes({id, tables, items, dataOnchage}) {
    // console.log("tables");
  return (
    <>
        {id === 1 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                id= {id}
                dataOnchage = {dataOnchage}

            />
        }
        {id === 2 && 
            <PerdaLocalisation 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
        {id === 3 && 
            <EnergiaTermica 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
        {id === 4 && 
            <ElecCompra 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
        {id === 5 && 
            <PerdaCompra 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
    </>
  )
}

export default Routes