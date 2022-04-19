
import React, { useEffect, useState } from 'react'
import SelectArea from '../Select'
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
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { contabilizarActions } from '../../actions'

function Table({ titles, titleArea, titleAreaContent, eT, onChangeData, itemsTable }) {
    const { data, loading, sucess} = useSelector(state => state.contabilizar)
    const dispatch = useDispatch()

    const combustivel= dadosEmissaoPorCombustivel.tipoCombustivel.combustivelFossil

    const [list, setList] = useState([1, 2, 3])
    const [indexList, setIndexList] = useState(0)
    const [indexTable, setIndexTable] = useState(0)
    const [dataTable, setDataTable] = useState(titles)
    const [dataCombustivel, setDataCombustivel] = useState({
        combustivel: "", fator_emissao_co2: "", fator_emissao_ch4: "", fator_emissao_n2o: ""
    })
    // console.log(titles);

    const handleMoreTable= () => {
        setList([...list, list.length + 1])
        const verification= [...dataTable]
        let newList= verification.map((i, key) => {
            verification[key].valor.push('')
        })
    }

    const handlLessTable= () => {
        setList(list.splice(0, list.length - 1))
        const verification= [...dataTable]
        let newList= verification.map((i, index) => {
            i.valor.pop()
        })

    }

    useEffect(() => {
        if (eT) {
            const ver1= dataTable[3]?.valor[indexList]
            const ver2= dataTable[4]?.valor[indexList]
            const result = ver2 / ver1

            if (ver1.length && ver2.length) {
                setDataTable([...dataTable, ...dataTable[5].valor[indexList] = result.toLocaleString('pt-BR', {minimumFractionDigits: 1})])
            } else {
                setDataTable([...dataTable, ...dataTable[5].valor[indexList] = ''])
            }
        }
        // console.log(dataTable[indexList]?.valor[0]);
    }, [dataTable])

    

    const handleInput= (e, item, index) => {
        const indexData= dataTable.findIndex(i => i.name === item)
        const isNumber= indexData === 3 || indexData === 4
        const textValue = isNumber ? e.target.value : e.target.innerText
        const verification= [...dataTable]
        const valores= [...dataTable[indexData].valor]
        let newValor= valores[index] = isNumber ? parseFloat(textValue) : textValue
        let newList= verification[indexData].valor[index] = isNumber ? parseFloat(textValue) : textValue

        // if (isNumber && typeof parseFloat(textValue) === 'string') {
        //     toast.error("Digita um numero")
        //     verification[indexData].valor[index] = ''
        // }
        // setDataTable([...dataTable, dataTable[verification].valor = textValue])
        // verification && setDataTable([...dataTable, dataTable.name === item && dataTable[0]])
        // console.log(dataTable);
        // console.log(dataTable.slice(0, 6));
        
        // console.log(data);
        // data.length > 0 
        //     ? onChangeData([...data, data[0].name.table = dataTable.slice(0, 6)])
        //     : onChangeData([...itemsTable, itemsTable[0].name.table = dataTable.slice(0, 6)])
        // console.log(data.length > 0 ? data[0].name.table : itemsTable[0].name.table);
    }

    const handleChange = (e, index, key) => {
        setDataTable([...dataTable, dataTable[key].valor[index]= e.target.value])
        // console.log(dataTable[key]);
        setIndexList(index)
        setIndexTable(key)
    }

    const handleOption= (e, index) => {
        const event= e.target.value
        const newData= combustivel.slice(0, 14).filter(i => i.combustivel === event)
        setDataTable([...dataTable, dataTable[2].valor[index]= event])
        setDataCombustivel(newData[0])
        // setIndexOPtion()
    }

  return (
    <Container>
        {titleArea && <TitleArea> {titleAreaContent} </TitleArea>}
        <div style={{display: 'flex'}}>
            <TableArea>
                <Thead>
                    <Tr>
                        {eT ?
                            titles?.map((item, key) => (
                                <Th key={key}>{item.name}</Th>
                                ))
                            : titles?.map((item, key) => (
                                <Th key={key}>{item}</Th>
                                ))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {list.map((item, index) => (
                        <Tr key={index}>
                        {titles?.map((title, key) => (
                            !eT ?
                                <Td key={key} suppressContentEditableWarning={true} onInput={''} contentEditable = {key === 2 ?'false' : 'true'} />
                            : 
                                <>
                                    {title.name === 'Combustível utilizado' ?
                                        <Td suppressContentEditableWarning={true} noPadding={true} onInput={(e) => handleInput(e, title.name)} contentEditable > 
                                            <select 
                                                value={dataTable[2].valor[index]} 
                                                onChange={(e) => handleOption(e, index)}
                                                style={{width: '100%', outline: 'none'}}>
                                                <option>  </option>
                                                {combustivel.map((c, i) => (
                                                    <option key={i}> {c.combustivel} </option>
                                                ))}
                                            </select>
                                        </Td>
                                    : 
                                        <Td 
                                            onInput={(e) => handleInput(e, title.name, index)} 
                                            contentEditable={key === 3 || key === 4 || key === 5 ?'false' : 'true'} 
                                            suppressContentEditableWarning={true}
                                            key={key}
                                            
                                        > 
                                            {key === 3 &&
                                                <Input 
                                                    value={dataTable[key].valor[index]} 
                                                    onChange={(e) => handleChange(e, index, key)} type='number' 
                                                />
                                            }
                                            {key === 4 &&
                                                <Input 
                                                    value={dataTable[key].valor[index]} 
                                                    onChange={(e) => handleChange(e, index, key)} type='number' 
                                                />
                                            }
                                            {key === 5 &&
                                                <Input 
                                                    value={dataTable[key].valor[index]} 
                                                    // onChange={(e) => handleChange(e, index, key)} type='number' 
                                                    disabled={true}
                                                />
                                            }
                                        </Td>
                                    }
                                </>
                            
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

export default Table