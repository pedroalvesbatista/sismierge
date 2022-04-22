import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { contabilizarActions } from '../../actions'
import { escopo, inicial } from '../../constants/app/'
import { 
  Area, 
  TextArea ,
  ContentArea,
  Card 
} from './styles'

export const HomePage = () => {
  const { data } = useSelector(state => state.contabilizar)
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const storage= JSON.parse(localStorage.getItem("@sismiegee/data"))
  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 3000);

  useEffect(() => {
    dispatch(contabilizarActions.loadData())
    dispatch(contabilizarActions.setDataStorage(escopo))
    
  }, [storage, data, contabilizarActions.setDataStorage, loading])

  // console.log(data);
  
  return (
    <Area >
      {!loading ? 'Carregando...'
      : <>
          <TextArea>
          O que você deseja fazer hoje?
        </TextArea>
        <ContentArea>
          {inicial.map((e, key) =>(
            <Card onClick={() => navigate(e.slug)} key={key}>
              {e.text}
            </Card>
          ))}
        </ContentArea>
      </>  
    }
    </Area>
  )
}
