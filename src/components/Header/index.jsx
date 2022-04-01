import React from 'react'
import { 
    Area ,
    TitleArea,
    SearchArea,
    IconSearch,
    Input
} from './styles'

function Header({ title }) {
    // const { titlePage } = useSelector(state => state.others)
    // const [title, setTitle] = useState(titlePage)
    // useEffect(() => {
    //   setTitle(titlePage)
    // }, [titlePage])
    
  return (
    <Area>
        <TitleArea> {title  ? title === 'Inicio' ? 'Visão geral' : title : 'Visão geral'} </TitleArea>
        <SearchArea>
            <IconSearch />
            <Input type='search' placeholder='Pesquisar...' />
        </SearchArea>
    </Area>
  )
}

export default Header