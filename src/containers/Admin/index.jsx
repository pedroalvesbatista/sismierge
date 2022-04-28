import React, { useEffect, useState, useForceRender } from 'react'
import { colaboradorConstants } from '../../constants/redux'
import { colaboradorActions } from '../../actions'
import TabsAdmin from '../../components/Tabs'
import Routes from './Routes'
import { useDispatch, useSelector } from 'react-redux'


export function Admin() {
    const dispatch= useDispatch()
    const { colaboradors, loading } = useSelector(state => state.colaborador)
    const [tabActive, setTabActive] = useState('Visão geral')
    const tabs= ["Visão geral", "Empresas", "Colaboradores"]
    const storage= localStorage.getItem("@sismiegee/admin/tabActive")

    const handleTabActive = e => {
        setTabActive(e)
        localStorage.setItem(`@sismiegee/admin/tabActive`, e)
    }

    useEffect(() => {
      dispatch(colaboradorActions.getColaboradors())
      if (storage) {
          setTabActive(storage)
      }
    }, [colaboradors, storage])
    

  return (
    <div>
        <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} />
        <Routes ex= {colaboradors} tab={tabActive} />
    </div>
  )
}

export default Admin