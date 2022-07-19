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

function Escopo1Teste({ data, slug, id, escopos }) {
    const [itemActive, setItemActive] = useState(null)
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

    useEffect(() => {
        const dataSubItem = data?.filter(i => i.sheetId == slug)[0]
        setItemActive(dataSubItem)
    }, [slug, data, itemActive])

    // console.log(data);

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
                placeholder="Escolhe aqui..."
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
                                {itemActive?.title === "Combustão estacionária" &&
                                    <SelectArea 
                                        title={"Setor de atividade"}
                                        item={data ? fatoresEmissaoSetor : ["Carregando..."]}
                                        // width={"10%"}
                                    />
                                }
                                <ContentArea width="90.8vw" >
                                    <TableSubItem 
                                        titleHeader={"item.title"}
                                        items={headCellsCombuEsta}
                                    />
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