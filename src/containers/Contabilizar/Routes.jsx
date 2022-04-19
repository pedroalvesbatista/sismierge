import React from 'react'
import ElecLocalisation from '../../components/Escopo2/ElectLocalisation'
import PerdaLocalisation from '../../components/Escopo2/PerdaLocalisation'
import EnergiaTermica from '../../components/Escopo2/EnergiaTermica'

function Routes({id, tables, items, dataOnchage}) {
    // console.log(items);
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
            <ElecLocalisation 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
        {id === 5 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                dataOnchage = {dataOnchage}
            />
        }
    </>
  )
}

export default Routes