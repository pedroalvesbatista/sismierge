import React from 'react'
import ElecLocalisation from '../../components/Escopo2/ElectLocalisation'

function Routes({id, tables, items}) {
  return (
    <>
        {id === 1 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
                id= {id}
            />
        }
        {id === 2 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
            />
        }
        {id === 3 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
            />
        }
        {id === 4 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
            />
        }
        {id === 5 && 
            <ElecLocalisation 
                tables={tables}
                items={items}
            />
        }
    </>
  )
}

export default Routes