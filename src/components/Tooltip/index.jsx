import React from 'react'
import { SearchArea, IconSearch, Input } from './styles'

function SearchInput() {
  return (
    <SearchArea>
        <IconSearch />
        <Input type='search' placeholder='Pesquisar...' />
    </SearchArea>
  )
}

export default SearchInput