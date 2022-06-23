import React from 'react'
import { Table1 } from './Table1'

function Routes({indexAba, indexTable, year}) {
  return (
    <>
        {indexAba === 0 && 
           <Table1 
                dataProps={{indexTable}} 
            />
        }
        {indexAba === 1 && <div>@djkdhjflg</div>}
    </>
  )
}

export default Routes