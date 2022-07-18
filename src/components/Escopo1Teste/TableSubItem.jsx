import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { Area, ContentArea, HeaderArea, InputArea } from './styles'

import { othersActions } from '../../actions'
import SelectArea from '../../components/Select'
import { ButtonAdd } from '../../components/Buttons/Add'
import { admin } from '../../constants/tailwind/colors'


const TableSubItem = ({ titleHeader, subHeader, items, titleFilter, itemFilter, filter }) => {
  const dispatch = useDispatch()
//   const subHeader= [" ", "Escopo 1", "Escopo 2 (abordagem por 'localização')", "Escopo 2 (abordagem por 'escolha de compra')", "Escopo 3"]
  
{console.log(items[0]?.header)}

  return (
    <Area width="90.7vw" scroll align="flex-start">
        <ContentArea padding="5px" radius nowrap align="center" justify="flex-start" bg={admin.cinza} >
            {items?.map((item, index) => (
                <HeaderArea width="300px" bg="none" height="50px" key={index} >
                    {item.header}
                </HeaderArea>
            )) }
        </ContentArea>
       <ContentArea padding="5px" radius nowrap align="center" justify="flex-start">
        {items?.map((item, index) => (
            
            // item?.items?.map(i => (
                
                typeof item.items.label  ? (
                    <HeaderArea width="300px" bg="none" height="50px" key={index} >
                        {item.items.label}
                       
                    </HeaderArea>
                ) : item.items.label?.map((i, key) => (
                    <HeaderArea key={key} width="300px" bg="none" height="50px" >
                        {i.label}
                        {console.log(item.items)}
                    </HeaderArea>
                ))
            // ))
        ))}
       </ContentArea>

       <ContentArea padding="5px" radius nowrap align="center" justify="flex-start">
        {items?.map((item, index) => (
                
                item.items.data?.map((i, key) => (
                        <InputArea key={key} width="300px" bg="none" height="50px" />
                    ))
                // ))
            ))}
       </ContentArea>
        {/* {items?.map((item, index) => (
        <HeaderArea key={index}> 
            {item?.header &&
                <HeaderArea align="center" header>
                    <HeaderTitle size="16"> {item?.header} </HeaderTitle>
                    {filter && <SelectArea 
                        title={"Filtrar pelo " + item?.header }
                        item={ itemFilter&& []}
                        width={"15%"}
                        spaceLeft="50%"
                    />}
                </HeaderArea>
            }

            <HeaderArea padding="0px" bg="transparent">
                {Object.keys(item?.items)?.map((entry, index) => (
                        <HeaderArea padding="10px 1px" color="#fff" br bg={admin.dark} key={index} >
                            <HeaderTitle weight={400} size="11"  color="#fff"> {entry.label} </HeaderTitle>
                        </HeaderArea>
                    ))
                } 
            </HeaderArea>
            
            <HeaderArea padding="0px" bg="transparent">
                {Object.keys(item?.items)?.map((item, index) => (
                    <HeaderArea padding="0px" color={admin.cinza} br bg={"transparent"} key={index}>
                        {item?.data?.map((res, indexRes) => (
                            <HeaderTitle size={12} border key={indexRes}  weight={400} > {res} </HeaderTitle>
                        ))}
                    </HeaderArea>
                    
                ))}
            </HeaderArea>
        </HeaderArea>
        ))} */}
    </Area>
    
  )
}

export default TableSubItem