import React from 'react'
import EmpresaTable from './EmpresaTable'
import EscopoTable from './EscopoTable'
import InventoryTable from './InventoryTable'

function Routes({tab, openModal}) {
    const tabs= ["empresa", "inventory", "escopo", "user"]
    
  return (
    <div >
        {tab === tabs[0] &&
            <EmpresaTable openModal={e => openModal(e)} />
        }
        {tab === tabs[1] &&
            <InventoryTable openModal={e => openModal(e)} />
        }
        {tab === tabs[2] &&
            <EscopoTable openModal={e => openModal(e)} />
        }
    </div>
  )
}

export default Routes