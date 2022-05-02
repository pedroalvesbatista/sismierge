import React from 'react'
import SearchInput from '../Search'
import RightHeader from './Right'
import { 
    Area ,
    TitleArea,
} from './styles'

function Header({ co2, co2t, title }) {
    
  return (
    <Area>
      <TitleArea> {title  ? title === 'Painel' ? 'Painel' : title : 'Painel'} </TitleArea>
      <SearchInput />
      <RightHeader />
    </Area>
  )
}

export default Header