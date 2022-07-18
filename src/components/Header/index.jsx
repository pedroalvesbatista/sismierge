import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import SearchInput from '../Search'
import RightHeader from './Right'
import { 
    Area ,
    TitleArea,
} from './styles'

function Header({ co2, co2t, title }) {

  const { titlePage } = useSelector(state => state.others)
    
  return (
    <Area>
      <TitleArea> {titlePage} </TitleArea>
      <SearchInput />
      <RightHeader />
    </Area>
  )
}

export default Header