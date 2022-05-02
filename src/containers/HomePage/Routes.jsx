import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'

function Routes({tab, openModal}) {
    const tabs= ["Visão geral", "Matriz", "Unidades", "Colaboradores"]
    
  return (
    <div >
        {tab === tabs[0] &&
            <Tab1 openModal={e => openModal(e)} />
        }
        {tab === tabs[1] &&
            <Tab2 openModal={e => openModal(e)} />
        }
        {tab === tabs[2] &&
            <Tab3 openModal={e => openModal(e)} />
        }
        {tab === tabs[3] &&
            <Tab4 openModal={e => openModal(e)} />
        }
    </div>
  )
}

export default Routes