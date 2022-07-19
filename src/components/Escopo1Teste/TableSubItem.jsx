import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { InputArea, TableArea, TbodyArea, TdArea, TextAreaTable, ThArea, TheadeArea, TrArea, WrapperArea } from './styles'

import { othersActions } from '../../actions'
import SelectArea from '../../components/Select'
import { ButtonAdd } from '../../components/Buttons/Add'
import { admin } from '../../constants/tailwind/colors'


const TableSubItem = ({ titleHeader, subHeader, items, titleFilter, itemFilter, filter }) => {
  const dispatch = useDispatch()
//   const subHeader= [" ", "Escopo 1", "Escopo 2 (abordagem por 'localização')", "Escopo 2 (abordagem por 'escolha de compra')", "Escopo 3"]
  
{console.log(items)}

  return (
    <WrapperArea>
        <TableArea>
            <TheadeArea>
                <TrArea bg="transparent">
                    {items.map((item, index) => (
                        <ThArea 
                            key={index}
                            bg={item?.header ? admin.roxo : "transparent"}
                            color={item?.header && "#fff"}
                            rowSpan={null} 
                            colSpan={item?.header ? item.items.length : null}
                        >
                            {item?.header && item?.header}
                        </ThArea>
                    ))}
                    {/* <ThArea rowSpan={null} colSpan={2}>name</ThArea>
                    <ThArea rowSpan={1} colSpan={null}>teste</ThArea> */}
                </TrArea>
                <TrArea >
                    {items.map((i) => i.items.map((item, index) => (
                        <ThArea 
                            key={index}
                        >
                            <TextAreaTable color='#fff' > {item.label} </TextAreaTable>
                        </ThArea>
                    )))}
                </TrArea>
            </TheadeArea>
            <TbodyArea>
                <TrArea bg="transparent">
                    {items.map((i) => i.items.map((data) => data.data.map((item, index) => (
                        <TdArea 
                            key={index}
                            bg={i.type !== "entry" && admin.cinza}
                            padding="10px"
                        >
                            {i.type === "entry" ? (
                                    <InputArea placeholder='Digite aqui...' />
                                ) : (
                                    <TextAreaTable > {item} </TextAreaTable>
                                )
                            }
                        </TdArea>
                    ))))}
                    {/* <TdArea>Flory muenge </TdArea>
                    <TdArea>Patrick Ntambwe</TdArea>
                    <TdArea>29 ans</TdArea>
                    <TdArea>Congo</TdArea> */}
                </TrArea>
            </TbodyArea>
        </TableArea>
    </WrapperArea>
    
  )
}

export default TableSubItem