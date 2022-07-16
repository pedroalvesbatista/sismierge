import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { companyActions } from '../../actions'
import Escopo1 from '../../components/Escopo1'
import Escopo1Teste from '../../components/Escopo1Teste'
// import { inicial } from '../../constants/app'
import { 
  Area, 
  TextArea ,
} from './styles'

export const Start = () => {
  const dispatch = useDispatch()
  const { companies, sucessUpdateCompany, sucessCompany, sucessCreateInventory } = useSelector((state) => state.company);

  const { id } = useParams()

  useEffect(() => {
    dispatch(companyActions.getCompanies());
  }, [])

  const dataEscopo= () => {
    switch (id) {
      case 1:
        return companies?.escopos?.filter((i) => i.id === 1)[0]?.items

      case 2:
        return companies?.escopos?.filter((i) => i.id === 2)[0]?.items

      case 3:
        return companies?.escopos?.filter((i) => i.id === 3)[0]?.items
    
      default:
        return [];
    }
  }

  // console.log(id);
  


  return (
    <Area >
      <Escopo1Teste data={dataEscopo()} />
    </Area>
  )
}
