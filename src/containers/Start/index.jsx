import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { companyActions, othersActions, sheetActions } from '../../actions'
import Escopo1 from '../../components/Escopo1'
import ModalInterno from "../../components/Modal";
import Escopo1Teste from '../../components/Escopo1Teste'
import { LoadingAnimation } from '../../components/lottie'
import dataSubItem from '../../mocks/datas.json'
// import { inicial } from '../../constants/app'
import { 
  Area, 
  TextArea ,
} from './styles'

export const Start = () => {
  const dispatch = useDispatch()
  const { companies, sucessUpdateCompany, sucessCompany, sucessCreateInventory } = useSelector((state) => state.company);
  const { titlePage } = useSelector((state) => state.others);
  const [dataTable, setDataTable] = useState(null)
  const [isSend, setIsSend] = useState(false)

  const { id, slug } = useParams()

  useEffect(() => {
    dispatch(sheetActions.loadSubEscopos(slug))
    dispatch(companyActions.getCompanies());
    // dispatch(othersActions.handleCloseMenu(true))
  }, [])

  // useEffect(() => {
  //   if (!localStorage.getItem("@sismierge/database")) {
  //     localStorage.setItem("@sismierge/database", JSON.stringify(dataSubItem.filter(i => i.id == slug)[0].items))
  //   }

  // }, [slug, window.localStorage])

  // console.log(range);
  

  const dataEscopo= () => {
    switch (id) {
      case "1":
        return companies?.escopos?.filter((i) => i.id === 1)[0]?.items

      case "2":
        return companies?.escopos?.filter((i) => i.id === 2)[0]?.items

      case "3":
        return companies?.escopos?.filter((i) => i.id === 3)[0]?.items
    
      default:
        return [];
    }
  }

// console.log(dataEscopo());

  return (
    <Area >
      {companies?.escopos.length < 1 ? 
        (
          <LoadingAnimation viewport={false} />
        ) : (
          <Escopo1Teste 
            sendData={item => setDataTable(item)} 
            escopos={companies?.escopos} 
            data={dataEscopo()} 
            id={id} 
            slug={slug} 
            activeCalculate={status => setIsSend(status)}
          />
        )
      }
      <ModalInterno />
    </Area>
  )
}
