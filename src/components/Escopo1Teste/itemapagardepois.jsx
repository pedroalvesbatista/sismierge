import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardArea } from '../../containers/Dashboard/styles'
import { ButtonAdd } from '../Buttons'
import { fatoresEmissaoSetor, headCellsCombuEsta } from '../Escopo1/selectionData'
import SelectArea from '../Select'
import { Area, IconDoc, Card, ContentArea, TextArea } from './styles'
import TableSubItem from './TableSubItem'
import { handleDataSelect } from '../../functions'
import dataSubItem from '../../mocks/datas.json'

function Escopo1Teste({ data, slug, id, escopos, sendData, activeCalculate }) {
    const [itemActive, setItemActive] = useState(null)
    const [indexTable, setIndexTable] = useState(0)
    const [rowLength, setRowLength] = useState([1])
    const [dataTable, setDataTable] = useState(null)
    // const [sendData, setSendData] = useState([])

    const [escopoActive, setEscopoActive] = useState(`Escopo ${id}`)
    const navigate = useNavigate()

    const handleOnchageEscopo = (event) => {
        const { value } = event.target
        console.log(value);
        setEscopoActive(`${value}`)
        navigate(`/start/${value.split(" ")[1]}`)
    }

    const handleOnchageSubItem = (e) => {
        const { value } = e.target
        const filterData = data?.filter(i => i.title == value)[0]
        // console.log(value);
        setItemActive(filterData)
        navigate(`/start/${id}/${filterData.sheetId}`)
    }

    const handleOnchange = (e) => {
        const { value, dataset } = e.target
        const { row, title } = dataset
        setIndexTable(parseInt(row))
        const newList = dataTable.map(data => {
            data.items.map(item => {
                if (item.label === title) {
                    item.data[row] = value
                }
            })
            return data
        })

        setDataTable(newList);
    }

    const handleAddRow = () => {
        let newData = dataTable.map(i => {
            i.items.map(d => {
                d.data = [...d.data, ""];
            })
            return i
        })
        setDataTable(newData)
        // setRowLength([...rowLength, rowLength.length + 1])
    }

    useEffect(() => {
        const dataSubItemFilter = data?.filter(i => i.sheetId == slug)[0]
        setItemActive(dataSubItemFilter)

        if (itemActive) {
            const newData = handleDataSelect(dataSubItem, itemActive?.title)
            setDataTable(newData)

            if (dataTable) {
                let lenData
                dataTable.map(i => {
                    i.items.map(d => {
                        d.data.map((item, index) => {
                            return lenData = index + 1
                        })
                    })
                })

                setRowLength(lenData);
            }
        }

    }, [slug, data, itemActive, dataTable, rowLength])

    // console.log(dataTable);

    useEffect(() => {
        if (dataTable) {
            const dataId = [1, 2, 3, 4]
            const filterCalc= "Quantidade Consumida"
            let newList = []
            dataTable?.slice(0, dataId.length)?.map(i => {
                i?.items?.map(item => {
                    newList = [...newList, {...item, data: item?.data[indexTable]}]
                    if (filterCalc === item.label) {
                        if (item?.data[indexTable].length > 0) {
                            activeCalculate(true)
                        }
                    }
                })
                 
            })
            sendData(newList)
        }
    }, [dataTable])
    

  return (
    <Area>
        <ContentArea align="flex-start" width="100%" >
            <SelectArea 
                title={"Ano Inventariodo"}
                item={data ? [2021, 2020, 2019] : ["Carregando..."]}
                width={"10%"}
            />
            <SelectArea 
                title={"Escopo"}
                item={data ? escopos?.map(i => i.type) : ["Carregando..."]}
                width={"10%"}
                spaceLeft="20px"
                value={escopoActive}
                onChange={handleOnchageEscopo}
            />
            <SelectArea 
                title={"Sub item"}
                item={data?.map( i => i?.title)}
                placeholder={data && "Escolhe aqui..."}
                width={"20%"}
                spaceLeft="20px"
                onChange={handleOnchageSubItem}
                value={itemActive?.title}
            />
        </ContentArea>

        {typeof slug !== "undefined"
            ? (
                <CardArea align="flex-start" width="100%" height="100%">
                    {itemActive?.title === "Efluentes" ? (
                            <ContentArea column justify="center" align="center" width="100%">
                                <IconDoc />
                                <TextArea>Ainda não existe nenhuma entrada</TextArea>
                                <ButtonAdd title={"Entrada"} />
                            </ContentArea>
                        ) : (
                            <ContentArea align="flex-start" width="100%" justify="flex-start" column>
                                <ContentArea>
                                    {itemActive?.title === "Combustão estacionária" &&
                                        <SelectArea 
                                            title={"Setor de atividade"}
                                            item={data ? fatoresEmissaoSetor : ["Carregando..."]}
                                            // width={"10%"}
                                        />
                                    }
                                    {data && <ButtonAdd onClick={handleAddRow} ml={20} mt={30} title={"mais linha"} />}
                                </ContentArea>

                                <ContentArea width="90.8vw" >
                                    {data ?  (
                                            <TableSubItem 
                                                titleHeader={"item.title"}
                                                items={data && dataTable}
                                                rowLength={rowLength}
                                                onChange={handleOnchange}
                                                onChangeSelect={handleOnchange}
                                            />
                                        ) : (
                                            <ContentArea width="100%" height="400px" justify="center">
                                                <TextArea> Carregando... </TextArea>
                                            </ContentArea>
                                        )
                                    }
                                </ContentArea>
                            </ContentArea>
                        )
                    }
                    
                </CardArea>
            ) : (
                <ContentArea>
                    {data?.map((item, index) => (
                        <Card onClick={() => navigate(`/start/${id}/${item.sheetId}`)} key={index}>
                            {item.title}
                        </Card>
                    ))}
                </ContentArea>
            )
        }
        
    </Area>
  )
}

export default Escopo1Teste