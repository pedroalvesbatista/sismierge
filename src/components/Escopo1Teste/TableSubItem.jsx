import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { InputArea, TableArea, TbodyArea, TdArea, TextAreaTable, ThArea, TheadeArea, TrArea, WrapperArea } from './styles'

import { othersActions } from '../../actions'
import SelectArea from '../../components/Select'
import { ButtonAdd } from '../../components/Buttons/Add'
import { admin } from '../../constants/tailwind/colors'
import { itemSelect } from '../../mocks/escopos'
import dataSelectItem from '../../mocks/dataSelectOptions.json'
import { handleDataSelect } from '../../functions'
import { useParams } from 'react-router-dom'


const TableSubItem = ({ titleHeader, rowLength, subHeader, items, range, itemFilter, filter, lengthItem, onChangeSelect, valueSelect, value, onChange }) => {
  const dispatch = useDispatch()
  const [labelSelect, setLabelSelect] = useState("")
  const [data, setData] = useState(null)
  const arrayRow = [...Array(rowLength).keys()]

  const { id, slug } = useParams()

//   const itemSelect = handleDataSelect(labelSelect)
    const handleInputType = (id) => {
        const idTypeNumber = [4]
        const filterData = idTypeNumber.filter(i => i == id).length > 0
        if (filterData) {
            return "number"
        }
    }

    console.log(items)

  
    const handleSelect = (item) => {
        // setLabelSelect(item)
        return itemSelect.filter(i => i == item).length > 0
    }

    // useEffect(() => {
    //     const lenData = []
    //     const filterData = data.map(i => {
    //         i.items.map(d => {
    //             lenData.join()
    //         })
    //     })
    //     // console.log(data)
    // }, [data])


  return (
    <WrapperArea>
        <TableArea>
            <TheadeArea>
                <TrArea bg="transparent">
                    {items?.map(i => i?.tables?.map(table => table.items?.map((item, index) => (
                        <ThArea 
                            key={index}
                            bg={item?.header ? admin.roxo : "transparent"}
                            color={item?.header && "#fff"}
                            rowSpan={null} 
                            colSpan={item?.header ? item.items.length : null}
                        >
                            {item?.header && item?.header}
                        </ThArea>
                    ))))}
                </TrArea>
                <TrArea >
                    {items?.map(i => i?.tables?.map(table => table.items?.map((sub) => sub?.items.map((item, index) => (
                        <ThArea 
                            key={index}
                        >
                            <TextAreaTable color='#fff' > {item.label} </TextAreaTable>
                        </ThArea>
                    )))))}
                </TrArea>
            </TheadeArea>
            <TbodyArea>
                {arrayRow?.map((i, indexRow) => (
                    <TrArea bg="transparent" key={indexRow}>
                        {items?.map((i) => i?.tables?.map(table => table.items.map(sub => sub?.items.map((data, index) => (
                            <TdArea 
                                key={index}
                                // bg={sub.type !== "entry" && admin.cinza}
                                padding="0px 5px"
                            >
                                <TextAreaTable > {data.data[indexRow]} </TextAreaTable>
                                {/* {sub.type === "entry" ? (
                                        handleSelect(data.label) ? (
                                            <SelectArea 
                                                spanceTop={"0px"}
                                                item={handleDataSelect(dataSelectItem, data.label)}
                                                onChange={onChangeSelect}
                                                value={valueSelect}
                                                dataRow={indexRow}
                                                dataTitle={data.label}
                                                placeholder="Escolhe aqui"
                                            />
                                        ) : <InputArea 
                                                data-indextableSub={data?.id} 
                                                data-row={indexRow} 
                                                data-title={data.label} 
                                                value={value} 
                                                onChange={onChange} 
                                                placeholder='Digite aqui...' 
                                                type={handleInputType(sub.id)}
                                            />
                                    ) : (
                                        
                                    )
                                } */}
                            </TdArea>
                        )))))}
                    </TrArea>
                ))}
            </TbodyArea>
        </TableArea>
    </WrapperArea>
    
  )
}

export default TableSubItem