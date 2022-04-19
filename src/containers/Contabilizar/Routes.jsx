import React from 'react'
import ElecLocalisation from '../../components/Escopo2/ElectLocalisation'
import PerdaLocalisation from '../../components/Escopo2/PerdaLocalisation'
import EnergiaTermica from '../../components/Escopo2/EnergiaTermica'

function Routes({id, tables, items, onChangeData}) {
    // console.log(items);
  return (
    <>
        {id === 1 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                id= {id}
                onChangeData = {onChangeData}
            />
        }
        {id === 2 && 
            <PerdaLocalisation 
                tables={tables}
                items={items}
                onChangeData = {onChangeData}
            />
        }
        {id === 3 && 
            <EnergiaTermica 
                tables={tables}
                items={items}
                onChangeData = {onChangeData}
            />
        }
        {id === 4 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                onChangeData = {onChangeData}
            />
        }
        {id === 5 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                onChangeData = {onChangeData}
            />
        }
    </>
  )
}

export default Routes