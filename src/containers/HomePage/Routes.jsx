import React from 'react'
import Tab5 from './Tab5'
import Tab6 from './Tab6'
import TabMinhaEmpresa from './TabMinhaEmpresa';
import TabMeusEscopos from './TabMeusEscopos';

function Routes({tab, openModal}) {
    const storageUser = JSON.parse(localStorage.getItem("@sismierge/auth"));
    const tabs= ["Minha empresa", "Inventariação", "Meus escopos", "Usuarios"]
    
  return (
    <div >
        {tab === tabs[0] &&
            <TabMinhaEmpresa openModal={e => openModal(e)} />
        }
        {tab === tabs[1] &&
            <Tab6 openModal={e => openModal(e)} />
        }
        {tab === tabs[2] &&
            <TabMeusEscopos openModal={e => openModal(e)} />
        }
        {tab === tabs[3] &&
            <Tab5 openModal={e => openModal(e)} />
        }
    </div>
  )
}

export default Routes