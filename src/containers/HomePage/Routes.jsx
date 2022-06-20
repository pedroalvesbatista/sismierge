import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'
import Tab6 from './Tab6'

function Routes({tab, openModal}) {
    const storageUser = JSON.parse(localStorage.getItem("@sismierge/auth"));
    const tabs= ["Visão geral", "Matriz", "Unidades", "Colaboradores", "Usuarios", "Inventariação"]
    
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
        {tab === tabs[4] &&
            <Tab5 openModal={e => openModal(e)} />
        }
        {tab === tabs[5] &&
            <Tab6 openModal={e => openModal(e)} />
        }
    </div>
  )
}

export default Routes