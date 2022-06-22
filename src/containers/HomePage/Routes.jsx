import React from 'react'
import Tab1 from './Tab1'
import Tab5 from './Tab5'
import Tab6 from './Tab6'

function Routes({tab, openModal}) {
    const storageUser = JSON.parse(localStorage.getItem("@sismierge/auth"));
    const tabs= ["Visão geral", "Inventariação", "Usuarios"]
    
  return (
    <div >
        {tab === tabs[0] &&
            <Tab1 openModal={e => openModal(e)} />
        }
        {tab === tabs[1] &&
            <Tab5 openModal={e => openModal(e)} />
        }
        {tab === tabs[2] &&
            <Tab6 openModal={e => openModal(e)} />
        }
    </div>
  )
}

export default Routes