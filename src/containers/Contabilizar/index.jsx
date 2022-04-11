import React, { Fragment, useEffect, useState } from 'react'
import { escopo } from '../../constants/app'
import BarButton from '../../components/Others/BarButton'
import { 
  Area, 
  SelectArea,
  WarnArea,
  Dropdown,
  ListItem,
  Divisor,
  VisorArea,
  TitleVisor,
  TitleListItem
} from './styles'
import Routes from './Routes'

export const Contabilizar = () => {
  const [option, setOption] = useState('Qual escopo você deseja?')
  const [openDrow, setOpenDrow] = useState(false)
  const [visor, setVisor] = useState(false)
  const [visorData, setVisorData] = useState('')
  const warnList= ['Escopo 1', 'Escopo 4']
  const warn= warnList.filter(i => i === option).length > 0
  const [indexOPtion, setIndexOPtion] = useState(0)
  const [subOptions, setSubOptions] = useState(null)

  const handleOption= e => {
    const event= e.target.value
    setOption(event)
    const ex= escopo.filter(i => i.item.title === event)
    // setIndexOPtion()
    setIndexOPtion(ex[0].id);
  }
  const handleClick= e => {
    const event= e.target.dataset.value
    setOpenDrow(false)
    setVisor(true)
    setVisorData(event)
    // setSubOptions()
    const ex= escopo[indexOPtion].item.options.filter(i => i.name.title === event)
    setSubOptions(ex);
  }

  // useEffect(() => {
  //   console.log(optionSelect);
  // },)


  useEffect(() => {
    option === 'Escopo 2' ? setOpenDrow(true) : setOpenDrow(false)
    option !== 'Escopo 2' && setVisor(false)
  }, [option])
  

  return (
    <Area >
      <SelectArea value={option} onChange={handleOption}>
        {escopo.map((item, key) => {
          return(
            <option value={item.item.title} key={key}> 
              {item.item.title} 
            </option>
          )
        })}
      </SelectArea>
      {warn &&
        <WarnArea>
          Esta funcionalidade está em desenvolvimento <br/>
          Aguarde!
        </WarnArea>
      }
      {openDrow &&
        <Dropdown>
          <TitleListItem > Escolha uma das 5 formas abaixo para relatar suas emissões de Escopo II </TitleListItem>
          <Divisor />
          {escopo[indexOPtion].item.options.map((item, key) => (
            <Fragment key={key}>
              <ListItem onClick={handleClick} data-value={item.name.title}> {item.name.title} </ListItem>
              <Divisor />
            </Fragment>
          ))}
        </Dropdown>
      }
      {visor &&
        <VisorArea>
          <BarButton />
          <TitleVisor> {visorData} </TitleVisor>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <Routes 
              id={subOptions[0]?.id}
              tables={subOptions[0]?.name.table}
              items={subOptions && subOptions[0]}
            />
          </div>
          </VisorArea>
      }
    </Area>
  )
}
