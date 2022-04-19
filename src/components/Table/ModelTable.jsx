
import React, { useEffect, useState } from 'react'
import { dadosEmissaoPorCombustivel } from '../../functions/tabelaConversao'
import { 
    TableArea,
    Tbody,
    Thead,
    Td,
    Th,
    Tr,
    MoreTable,
    Container,
    AreaBtn,
    TitleArea,
    Input
  } from './styles'

function ModelTable({ 
    typeInput, 
    items, 
    indexTypeInput, 
    titleArea, 
    titleAreaContent, 
    selectOption, 
    itemsSelecOption,
    dataOnchage,
    selectOptionIndex }) {
    const [list, setList] = useState([1, 2, 3])
    const [state, setState] = useState(items)

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
    }

    const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
    }

    const handleChange = (value, col, row) => {
        setState([...state, state[col].valor[row]= value])
        dataOnchage(state)
    }

    // console.log(items);
    

  return (
    <Container>
        {titleArea && <TitleArea> {titleAreaContent} </TitleArea>}
        <div style={{display: 'flex'}}>
            <TableArea>
                <Thead>
                    <Tr>
                        {items.map((item, index) => (
                            <Th key={index}> {item.name} </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {list.map((row, indexRow) => (
                        <Tr key={indexRow}>
                            {items.map((item, indexCol) => (
                                <Td>
                                    {selectOption ? selectOptionIndex.filter(i => i === indexCol).length > 0 &&
                                        <select 
                                            // value={dataTable[2].valor[indexCol]} 
                                            // onChange={(e) => handleOption(e, indexCol)}
                                            style={{width: '100%', outline: 'none'}}
                                        >
                                            <option>  </option>
                                            {itemsSelecOption?.map((item, indexOptions) => (
                                                <option key={indexOptions}> {item.combustivel} </option>
                                            ))}
                                        </select>

                                    :   <Input 
                                            type={typeInput && indexTypeInput.filter(i => i === indexCol).length > 0 && typeInput} 
                                            onChange={(e) => handleChange(e.target.value, indexCol, indexRow)}
                                            value={state[indexCol]?.valor[indexRow]}
                                        />
                                    }
                                </Td>
                            ))}                            
                        </Tr>
                    ))}
                </Tbody>
            </TableArea>
            <AreaBtn>
                {list.length > 3 && <MoreTable delete={true} onClick={handlLessTable}> - </MoreTable>}
                <MoreTable onClick={handleMoreTable}> + </MoreTable>
            </AreaBtn>
        </div>
    </Container>
  )
}

export default ModelTable