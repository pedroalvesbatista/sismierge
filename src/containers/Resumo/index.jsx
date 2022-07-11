import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { 
  Area, Container, Header, HeaderArea, HeaderTitle, Wrapper
} from './styles'

import { othersActions, sheetActions } from '../../actions'
import SelectArea from '../../components/Select'
import { ButtonAdd } from '../../components/Buttons/Add'
import { admin } from '../../constants/tailwind/colors'
import TableResumo from './TableResumo'
import { LoadingAnimation } from '../../components/lottie'


export const Resumo = () => {
  const dispatch = useDispatch()
  const { loadingResumo, sucessResumo, dataResumo } = useSelector(state => state.sheet)
  const subHeader= [" ", "Escopo 1", "Escopo 2 (abordagem por 'localização')", "Escopo 2 (abordagem por 'escolha de compra')", "Escopo 3"]

  useEffect(() => {
    dispatch(sheetActions.loadResumo())
  }, [])
  
  // console.log(dataResumo);

  return (
    loadingResumo ? (
      <LoadingAnimation />
    ) : (
      <Area>
        <Header header>
          <SelectArea 
            title={"Escolha o ano do inventário"}
            item={["2021", "2020"]}
            width={"15%"}
          />
          <ButtonAdd 
            mt={30}
            ml={10}
            padding="8px 30px"
            title={"Baixar o resumo"}
            posTitle={false}
          />
        </Header>
        
        {dataResumo?.emisions?.map((item, index) => (
          <Wrapper>
            <Header flex header>
              <HeaderTitle mt={10} align="flex-start" size={18} flex="none"> {item.title} </HeaderTitle>
            </Header>
            <Header width={50} header flex>
              <TableResumo 
                titleHeader={item.title}
                items={item.tables}
              />
            </Header>
          </Wrapper>
        ))}
        
      </Area>
    )
  )
}