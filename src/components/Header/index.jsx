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

function Header({ title }) {
    
  return (
    <Area>
        {/* <TitleArea> {title  ? title === 'Inicio' ? 'Visão geral' : title : 'Visão geral'} </TitleArea> */}
        <Div />
        <SearchArea>
            <IconSearch />
            <Input type='search' placeholder='Pesquisar...' />
        </SearchArea>
        <Board />
    </Area>
  )
}

export default Header