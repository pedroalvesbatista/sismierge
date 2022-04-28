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

    useEffect(() => {
      dispatch(colaboradorActions.getColaboradors())
    }, [colaboradors])

    // console.log(colaboradors);
    

  return (
    <div>
        <TabsAdmin onCLick={(e) => setTabActive(e)} active={tabActive} items={tabs} />
        <Routes ex= {colaboradors} tab={tabActive} />
    </div>
  )
}

export default Admin