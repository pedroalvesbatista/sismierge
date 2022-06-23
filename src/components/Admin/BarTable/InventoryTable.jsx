import React, { useState } from 'react'
import styled from 'styled-components'
import { SiDatabricks } from 'react-icons/si'
import { BsPlusCircleDotted, BsPencilSquare, BsTrash } from 'react-icons/bs'
import { admin } from '../../../constants/tailwind/colors'
import { ButtonAdd } from '../../Buttons'
import Toogle from '../../Input/Toogle'
import { authActions, othersActions } from '../../../actions'
import { useDispatch } from 'react-redux'

function InventoryTable({item}) {
    const dispatch = useDispatch()
    const [toogle, setToogle] = useState(false)

    const handleEdit = (item) => {
        // dispatch(othersActions.handleOpenModal("Editar Usuário"))
        // dispatch(othersActions.setDataModal(item))
    }

    const handleDelete = (id) => {
        dispatch(authActions.deleteUser(id))
    }

    console.log("item");

  return (
    <TableArea>
        <Item onClick={() => handleEdit(item)}>  { item?.ano } </Item>
        <Item onClick={() => handleEdit(item)}>  { item?.motivo?.length > 0 ? item?.motivo : "-" } </Item>
        <Item onClick={() => handleEdit(item)}>  
            { item?.producao_total_ano?.length > 0 ?
                item?.producao_total_ano?.length > 1 ?  
                    `${item?.producao_total_ano?.length } produtos` 
                    : `${item?.producao_total_ano?.length } produto`
                : "-" 
            } 
        </Item>
        <Item> 
            <BsPencilSquare onClick={() => handleEdit(item)} size={14} color={admin.verde} />
            <BsTrash 
                size={14} 
                color={"red"} 
                onClick={() => handleDelete(item.id)}
            />
            <BtnStart> Iniciar </BtnStart>
        </Item>
        {/* <Item> 
            <Toogle onClick={() => setToogle(!toogle)} active={toogle} />     
        </Item> */}
    </TableArea>
  )
}

const BtnStart = styled.button`
  padding: 2px 10px;
  background-color: ${admin.verde};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:hover{
    background-color: ${admin.verde}89;
  }
  &:active{
    background-color: ${admin.verde};
  }
`
const TableArea = styled.th`
    padding: 10px 0px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    
`
const Item = styled.span`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* font-size: 18px; */
    font-weight: ${({title}) => title ? '600' : '400'};
    flex: 1;
    /* background-color: red; */
`
const IconDoc = styled(SiDatabricks)`
  color: ${admin.verde};
  font-size: 70px;
`

export default InventoryTable