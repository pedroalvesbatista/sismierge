import React from 'react'
import Board from '../Board'
import SearchInput from '../Search'
import RightHeader from './Right'
import { 
    Area ,
    TitleArea,
    SearchArea,
    IconSearch,
    Input,
    Div
} from './styles'

function Header({ co2, co2t, title }) {
    
  return (
    <Area>
      <TitleArea> {title  ? title === 'Inicio' ? 'Visão geral' : title : 'Visão geral'} </TitleArea>
      {/* <Div /> */}
      <SearchInput />
      <RightHeader />
      {/* <Board 
        co2={co2} 
        co2t={co2t}
      /> */}
    </Area>
  )
}

export default Header