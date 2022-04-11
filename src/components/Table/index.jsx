import React, { useState } from 'react'
import { 
    TableArea,
    Tbody,
    Thead,
    Td,
    Th,
    Tr,
    MoreTable,
    Container,
    AreaBtn
  } from './styles'

function Table({ titles }) {

    const [list, setList] = useState([1, 2, 3])
    // console.log(titles);

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
      }
      const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
      }

  return (
    <Container>
        <TableArea>
            <Thead>
                <Tr>
                    {titles?.map((item, key) => (
                    <Th key={key}>{item}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {list.map((item, key) => (
                    <Tr key={key}>
                    {titles?.map(() => (
                        <Td onInput={``} contentEditable ></Td>
                    ))}
                    </Tr>
                ))}
            </Tbody>
        </TableArea>
        <AreaBtn>
            {list.length > 3 && <MoreTable delete={true} onClick={handlLessTable}> - </MoreTable>}
            <MoreTable onClick={handleMoreTable}> + </MoreTable>
        </AreaBtn>
    </Container>
  )
}

export default Table