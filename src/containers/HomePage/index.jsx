import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { contabilizarActions, othersActions } from '../../actions'
import { escopo, inicial } from '../../constants/app/'
import Board from "../../components/Board"

import { 
  Area, 
  TextArea ,
  HeaderArea,
  Card 
} from './styles'
import TabsAdmin from '../../components/Tabs'
import Modal from '../../components/Modal'
import Routes from './Routes'

export const HomePage = () => {
  const { data } = useSelector(state => state.contabilizar)
  const { isOpenModal } = useSelector(state => state.others)
  const [tabActive, setTabActive] = useState('Visão geral')
  const [dataModal, setDataModal] = useState(null)
  const tabs= ["Visão geral", "Unidades", "Colaboradores"]
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))
  const [loading, setLoading] = useState(true)

  const [dataBoard, setdataBoard] = useState([
    {id: 1, title: "Custo total do uso", icon: "", number: "12 032"},
    {id: 2, title: "Consumo total de eletricidade", icon: "", number: "7 361 800"},
    {id: 1, title: "Produção fotovoltaica total", icon: "", number: "9.7M"},
    {id: 1, title: "Consumo total de energia", icon: "", number: "194.3"}
  ])
  

  // setTimeout(() => {
  //   setLoading(true)
  // }, 3000);
  

  // useEffect(() => {
  //   dispatch(contabilizarActions.loadData())
  //   dispatch(contabilizarActions.setDataStorage(escopo))
    
  // }, [storage, data, contabilizarActions.setDataStorage, loading])
  
  const test = () => {
    dispatch(othersActions.handleModal())
    console.log("okey");
  }

  const handleTabActive = e => {
    setTabActive(e)
    localStorage.setItem(`@sismiegee/tabActive`, e)
  }
  
  return (
    <Area >
      {!loading ? 'Carregando...'
      : <>
          <HeaderArea>
            {dataBoard.map((item, index) => (
              <Board key={index} number={item.number} title={item.title} />
            ))}
          </HeaderArea>
          <TabsAdmin onCLick={(e) => handleTabActive(e)} active={tabActive} items={tabs} />
          <Routes openModal={e => setDataModal(e)} tab={tabActive} />
          <Modal />
      </>  
    }
    </Area>
  )
}
