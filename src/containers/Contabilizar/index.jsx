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
import Tabs from '../../components/Tabs'

export const Contabilizar = () => {
  const dispatch = useDispatch()
  const [option, setOption] = useState('Qual escopo você deseja?')
  const {co2, co2t} = useSelector(state => state.contabilizar)
  const { data, loading, sucess, changeTableData} = useSelector(state => state.contabilizar)
  const { optionSelect, otherOptionSelect } = useSelector(state => state.others)
  const [openDrow, setOpenDrow] = useState(false)
  const [activeTab, setActiveTab] = useState(false)
  const [preview, setPreview] = useState(false)
  const [visor, setVisor] = useState(false)
  const [visorData, setVisorData] = useState('')
  const warnList= ['Escopo 1', 'Escopo 4']
  const warn= warnList.filter(i => i === option).length > 0
  const [indexOPtion, setIndexOPtion] = useState(0)
  const [subOptions, setSubOptions] = useState(null)
  const [onChangeDataTable, setonChangeDataTable] = useState(null)

  const storage= JSON.parse(localStorage.getItem("@sismiegee/data:contabilizar"))

  const storageData= JSON.parse(localStorage.getItem("@sismiegee/data")) 

  const datas = storageData ? storageData : data

  const handleOption= e => {
    const event= e.target.value
    setOption(event)
    const ex= datas.filter(i => i.item.title === event)
    // setIndexOPtion()
    setIndexOPtion(ex[0].id);
  }

  console.log(co2);

  const handleClick= event => {
    // setOpenDrow(false)
    setVisor(true)
    setVisorData(event)
    const ex= datas[indexOPtion].item.options.filter(i => i.name.title === event)
    !storage && localStorage.setItem("@sismiegee/data:contabilizar", JSON.stringify(ex))
    setSubOptions(ex);
  }

  const handleSaveTable = () => {
    if (onChangeDataTable) {
      if (otherOptionSelect === 'Sistema Interligado Nacional (SIN)') {
        const newList= [...subOptions, subOptions[0].name.table = onChangeDataTable]
        // setSubOptions([...subOptions, subOptions[0].name.table = onChangeDataTable])
        dispatch(contabilizarActions.saveData(newList, subOptions[0]?.id))
      }
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

  // console.log(data);


  useEffect(() => {
    option === 'Escopo 2' ? setOpenDrow(true) : setOpenDrow(false)
    option !== 'Escopo 2' && setVisor(false)
    if (warn) {
      toast.info('Esta funcionalidade está em desenvolvimento')
    }
    // console.log(escopo[indexOPtion]?.item.options);
    // console.log(openDrow);
  }, [option, warn])
  
  

  return (
    <Area >
      <SelectArea value={option} onChange={handleOption}>
        {datas.map((item, key) => {
          return(
            <option value={item?.item?.title} key={key}> 
              {item?.item?.title} 
            </option>
          )
        })}
      </SelectArea>
      {!preview ?
        <>
          {openDrow &&
            <Dropdown>
              <Tabs 
                items={datas[indexOPtion].item.options}
                onCLick={handleClick}
                active= {visorData}
              />
              {!visorData && 
                <TitleListItem > 
                  Escolha uma das 5 formas para relatar suas emissões de Escopo II 
                </TitleListItem>
              }
              {/* <Divisor />
              {escopo[indexOPtion].item.options.map((item, key) => (
                <Fragment key={key}>
                  <ListItem onClick={handleClick} datas-value={item.name.title}> {item.name.title} </ListItem>
                  <Divisor />
                </Fragment>
              ))} */}
            </Dropdown>
          }
          {visor &&
            <VisorArea>
              <BarButton onPreview={handlePreviewTable} onSend={handleSendTable} onSave={handleSaveTable}  />
              <TitleVisor> {visorData} </TitleVisor>
              <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <Routes 
                  id={subOptions[0]?.id}
                  tables={subOptions[0]?.name.table}
                  items={subOptions && subOptions[0]}
                  // onChangeData = {e => setonChangeDataTable(e)}
                  dataOnchage= {e => setonChangeDataTable(e)}
                />
              </div>
            </VisorArea>
          }
        </>
        : <PreviewTable 
            items= {onChangeDataTable?.length > 0 ? onChangeDataTable[0].name.table : storage[0]?.name.table} 
            preview={preview} 
            onClick={() => setPreview(!preview)} 
          />
      }
    </Area>
  )
}