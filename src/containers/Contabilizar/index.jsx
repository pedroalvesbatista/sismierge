import React, { Fragment, useEffect, useState } from 'react'
import { escopo, table } from '../../constants/app'
import { 
  Area, 
  SelectArea,
  WarnArea,
  Dropdown,
  ListItem,
  Divisor,
  VisorArea,
  TitleVisor,
  Table,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
  MoreTable,
  Button
} from './styles'

export const Contabilizar = () => {
  const [option, setOption] = useState('Qual escopo você deseja?')
  const [openDrow, setOpenDrow] = useState(false)
  const [visor, setVisor] = useState(false)
  const [visorData, setVisorData] = useState('')
  const warnList= ['Escopo 1', 'Escopo 4']
  const warn= warnList.filter(i => i === option).length > 0
  const [list, setList] = useState([1, 2, 3])

  const handleOption= e => {
    setOption(e.target.value)
  }
  const handleClick= e => {
    setOpenDrow(false)
    setVisor(true)
    setVisorData(e.target.dataset.value)
  }

  const handleMoreTable= () => {
    setList([...list, list.length + 1])
  }
  const handlLessTable= () => {
    setList(list.splice(0, list.length - 1))
  }

  useEffect(() => {
    option === 'Escopo 2' ? setOpenDrow(true) : setOpenDrow(false)
    option !== 'Escopo 2' && setVisor(false)
  }, [option])
  

  return (
    <Area >
      <SelectArea value={option} onChange={handleOption}>
        {escopo.map((item, key) => (
          <option value={item.item.title} key={key}> {item.item.title} </option>
        ))}
      </SelectArea>
      {warn &&
        <WarnArea>
          Esta funcionalidade está em desenvolvimento <br/>
          Aguarde!
        </WarnArea>
      }
      {openDrow &&
        <Dropdown>
          {escopo[1].item.options.map((item, key) => (
            <Fragment key={key}>
              <ListItem onClick={handleClick} data-value={item}> {item} </ListItem>
              <Divisor />
            </Fragment>
          ))}
        </Dropdown>
      }
      {visor &&
        <VisorArea>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
            <Button color='verde'>Salvar</Button>
            <Button color='roxo'>Enviar</Button>
            <Button>Prévia de cálculos</Button>
          </div>
          <TitleVisor> {visorData} </TitleVisor>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <Table>
              <Thead>
                <Tr>
                  {table[0].title.map((item, key) => (
                    <Th key={key}>{item}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {list.map((item, key) => (
                  <Tr key={key}>
                    {table[0].title.map(() => (
                      <Td onInput={``} contentEditable ></Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <div>
              {list.length > 3 && <MoreTable delete={true} onClick={handlLessTable}> - </MoreTable>}
              <MoreTable onClick={handleMoreTable}> + </MoreTable>
            </div>
          </div>
          </VisorArea>
      }
    </Area>
  )
}
