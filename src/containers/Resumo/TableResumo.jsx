import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { 
  Area, Container, Header, HeaderArea, HeaderTitle, Wrapper
} from './styles'

import { othersActions } from '../../actions'
import SelectArea from '../../components/Select'
import { ButtonAdd } from '../../components/Buttons/Add'
import { admin } from '../../constants/tailwind/colors'


const TableResumo = ({ titleHeader, subHeader, items, titleFilter, itemFilter, filter }) => {
  const dispatch = useDispatch()
//   const subHeader= [" ", "Escopo 1", "Escopo 2 (abordagem por 'localização')", "Escopo 2 (abordagem por 'escolha de compra')", "Escopo 3"]
  

  return (
    items.map((item, index) => (
        <Header key={index}>
            <HeaderArea> 
                <HeaderArea align="center" header>
                    <HeaderTitle size="16"> {item.header} </HeaderTitle>
                    {filter && <SelectArea 
                        title={"Filtrar pelo " + item.header }
                        item={ itemFilter&& []}
                        width={"15%"}
                        spaceLeft="50%"
                    />}
                </HeaderArea>

                <HeaderArea padding="0px" bg="transparent" header>
                    {item.sub_header?.map((subHeader, index) => (
                    <HeaderArea padding="10px 1px" color="#fff" br bg={admin.dark} key={index} >
                        <HeaderTitle weight={400} size="11"  color="#fff"> {subHeader.title} </HeaderTitle>
                    </HeaderArea>
                    ))} 
                </HeaderArea>
                
                <HeaderArea padding="0px" bg="transparent" header>
                    {item?.sub_header.map((dataItem, index) => (
                        <HeaderArea padding="0px" color={admin.cinza} br bg={"transparent"} key={index}>
                            {dataItem.items.map((res, indexRes) => (
                                <HeaderTitle size={12} border key={indexRes}  weight={400} > {res} </HeaderTitle>
                            ))}
                        </HeaderArea>
                        
                    ))}
                </HeaderArea>
            </HeaderArea>
        </Header>
    ))
  )
}

export default TableResumo