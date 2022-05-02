import React, { useEffect, useState } from 'react'
import { colaboradorService } from '../../services'
import TabsAdmin from '../../components/Tabs'
import Routes from './Routes'
import Modal from '../../components/Modal'


export function Admin() {
    const [tabActive, setTabActive] = useState('Visão geral')
    const [dataModal, setDataModal] = useState(null)
    const tabs= ["Visão geral", "Empresas", "Colaboradores"]
    const storage= localStorage.getItem("@sismiegee/admin/tabActive")

    const handleTabActive = e => {
        setTabActive(e)
        localStorage.setItem(`@sismiegee/admin/tabActive`, e)
    }

    useEffect(() => {
      if (storage) {
          setTabActive(storage)
      }
    }, [storage])
    

  return (
    <div>
        <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} />
        <Routes openModal={e => setDataModal(e)} tab={tabActive} />
        <Modal />
    </div>
  )
}

export default Admin