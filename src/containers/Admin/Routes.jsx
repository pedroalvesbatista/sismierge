import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

function Routes({tab, ex}) {
    const tabs= ["Visão geral", "Empresas", "Colaboradores"]
    console.log(ex);
  return (
    <div >
        {tab === tabs[0] &&
            <Tab1 />
        }
        {tab === tabs[1] &&
            <Tab2 />
        }
        {tab === tabs[2] &&
            <Tab3 />
        }
    </div>
  )
}

export default Routes