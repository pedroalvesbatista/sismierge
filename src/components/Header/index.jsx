import React from 'react'
import Board from '../Board'
import { 
    Area ,
    TitleArea,
    SearchArea,
    IconSearch,
    Input,
    Div
} from './styles'

function Header({ co2, co2t }) {
    
  return (
    <Area>
        {/* <TitleArea> {title  ? title === 'Inicio' ? 'Visão geral' : title : 'Visão geral'} </TitleArea> */}
        <Div />
        <SearchArea>
            <IconSearch />
            <Input type='search' placeholder='Pesquisar...' />
        </SearchArea>
        <Board 
          co2={co2} 
          co2t={co2t}
        />
    </Area>
  )
}

export default Header