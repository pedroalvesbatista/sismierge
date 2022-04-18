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
import { useDispatch, useSelector } from 'react-redux'
import { contabilizarActions } from '../../actions'
import { toast } from 'react-toastify'
import PreviewTable from './PreviewTable'

export const Contabilizar = () => {
  const dispatch = useDispatch()
  const [option, setOption] = useState('Qual escopo você deseja?')
  const { data, loading, sucess, changeTableData} = useSelector(state => state.contabilizar)
  const [openDrow, setOpenDrow] = useState(false)
  const [preview, setPreview] = useState(false)
  const [visor, setVisor] = useState(false)
  const [visorData, setVisorData] = useState('')
  const warnList= ['Escopo 1', 'Escopo 4']
  const warn= warnList.filter(i => i === option).length > 0
  const [indexOPtion, setIndexOPtion] = useState(0)
  const [subOptions, setSubOptions] = useState(null)
  const [onChangeDataTable, setonChangeDataTable] = useState(null)

  const storage= JSON.parse(localStorage.getItem("@sismiegee/data:contabilizar"))

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
    !storage && localStorage.setItem("@sismiegee/data:contabilizar", JSON.stringify(ex))
    setSubOptions(ex);
  }

  const handleSaveTable = () => {
    if (onChangeDataTable) {
      dispatch(contabilizarActions.saveData(onChangeDataTable))
    } else {
      toast.error("Nenhuma modificacao pra salvar")
    }
  }

  const handleSendTable = () => {
    if (onChangeDataTable) {
      dispatch(contabilizarActions.saveData(onChangeDataTable))
      toast.success("Salcando com sucesso")
    } else {
      toast.error("Nenhuma modificacao pra enviar")
    }
  }

  const handlePreviewTable = () => {
    setPreview(!preview)
  }


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
      {!preview ? 
        <>
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
              <BarButton onPreview={handlePreviewTable} onSend={handleSendTable} onSave={handleSaveTable}  />
              <TitleVisor> {visorData} </TitleVisor>
              <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <Routes 
                  id={data.length > 0 ? data[0]?.id : subOptions[0]?.id }
                  tables={data.length > 0 ? data[0]?.name.table : subOptions[0]?.name.table}
                  items={data.length > 0 ? data : subOptions}
                  onChangeData = {e => setonChangeDataTable(e)}
                />
              </div>
            </VisorArea>
          }
        </>
        : <PreviewTable 
          items= {onChangeDataTable.length > 0 ? onChangeDataTable[0].name.table : storage[0].name.table} 
          preview={preview} 
          onClick={() => setPreview(!preview)} 
        />
      }
    </Area>
  )
}
